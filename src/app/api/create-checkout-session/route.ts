import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    console.log('Incoming content-type:', req.headers.get('content-type'));
    const bodyText = await req.text();
    console.log('Raw request body:', bodyText);

    const { amount } = JSON.parse(bodyText);

    if (!amount || isNaN(amount) || amount < 1) {
      return new NextResponse('Invalid amount', { status: 400 });
    }

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
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe session creation error:', err.message);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
