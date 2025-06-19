import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { CartItem } from "../../CartContext";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items } = body;

    console.log("Empfangene Items:", items);

    const line_items = [
      ...items.map((item: CartItem) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.product.name,
            description: item.product.description,
            /* images: item.product.images, */
          },
          unit_amount: Math.round(item.product.price * 100),
        },
        quantity: item.quantity,
      })),
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Versandkosten",
          },
          unit_amount: 499,
        },
        quantity: 1,
      },
    ];

    console.log("lineItems", line_items);

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      automatic_tax: { enabled: true },
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
        { status: 500 }
      );
    }

    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
