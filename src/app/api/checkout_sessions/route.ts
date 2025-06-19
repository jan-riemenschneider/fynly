import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { Product } from "@/data/products";

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    console.log("Empfangene Items:", items);

    const origin = request.headers.get("origin") || new URL(request.url).origin;

    const line_items = [
      ...items.map((item: Product) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            description: item.description,
            images: item.images,
          },
          unit_amount: Math.round(item.price * 100),
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

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
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
