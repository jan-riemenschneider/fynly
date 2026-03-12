import { type NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import type { CartItem } from "../../../context/CartContext";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items } = body;

    const origin = request.headers.get("origin") || new URL(request.url).origin;

    const line_items = items.map((item: CartItem) => {
      const customizationPrice = item.customization?.price ?? 0;
      const unitAmount = Math.round(
        (item.product.price + customizationPrice) * 100,
      );

      return {
        price_data: {
          currency: "eur",
          product_data: {
            description: item.customization
              ? `${item.product.description} - Deine Personalisierung: ${item.customization.name}`
              : item.product.description,
            images: [
              `https://res.cloudinary.com/fynly/image/upload/f_auto,q_auto,w_1200,h_1200,c_fit/${item.product.publicId[0]}/main.png`,
            ],
            name: item.customization
              ? `${item.product.name} inkl. Sonderanfertigung`
              : item.product.name,
          },
          tax_behavior: "inclusive",
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      automatic_tax: {
        enabled: true,
      },
      billing_address_collection: "required",
      cancel_url: `${origin}/?canceled=true`,
      line_items,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["DE"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            delivery_estimate: {
              maximum: { unit: "business_day", value: 5 },
              minimum: { unit: "business_day", value: 3 },
            },
            display_name: "Standard Versand",
            fixed_amount: {
              amount: 499,
              currency: "eur",
            },
            tax_behavior: "inclusive",
            tax_code: "txcd_92010001",
            type: "fixed_amount",
          },
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error: unknown) {
    console.error("Stripe error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: "Internal Server Error",
          message: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
