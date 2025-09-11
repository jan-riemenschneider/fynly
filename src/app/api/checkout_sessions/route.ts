import { CartItem } from '@/context/CartContext'
import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items } = body

    console.log('Empfangene Items:', items)

    const origin = request.headers.get('origin') || new URL(request.url).origin

    const line_items = [
      ...items.map((item: CartItem) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.product.name,
            description: item.customization
              ? `${item.product.description} - Deine Personalisierung: ${item.customization.name}`
              : item.product.description,
            images: [
              `https://res.cloudinary.com/fynly/image/upload/f_auto,q_auto,w_1200,h_1200,c_fit/${item.product.publicId[0]}/main.png`,
            ],
            tax_code: 'txcd_10000000',
          },
          unit_amount: Math.round(item.product.price * 100),
        },
        quantity: item.quantity,
      })),
    ]

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,

      automatic_tax: { enabled: true },

      billing_address_collection: 'required',

      shipping_address_collection: {
        allowed_countries: ['DE', 'AT', 'CH'],
      },

      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 499, currency: 'eur' },
            display_name: 'Standard Versand',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 3 },
              maximum: { unit: 'business_day', value: 5 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 999, currency: 'eur' },
            display_name: 'Express Versand',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 1 },
              maximum: { unit: 'business_day', value: 2 },
            },
          },
        },
      ],

      payment_method_types: ['card', 'sepa_debit', 'paypal'],
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })
  } catch (error: unknown) {
    console.error('Stripe error:', error)

    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: 'Internal Server Error',
          message: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ error: 'Unknown error' }, { status: 500 })
  }
}
