import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// ✅ Your confirmed working test secret key:
const stripe = new Stripe('sk_test_51Rj0eKH8y9UyUx85Y9up1mREDACTED', {
  apiVersion: '2024-04-10',
});

// ✅ Your confirmed working test price ID:
const priceId = 'price_1RlC6nHGEStT9xDPCIS4LVxHZ';

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: any) {
    console.error('🔥 STRIPE ERROR:', err);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
