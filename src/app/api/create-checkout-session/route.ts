import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Glen Echo Neighborhood Donation',
            },
            unit_amount: 5000, // $50.00
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: any) {
    console.error(err.message);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
