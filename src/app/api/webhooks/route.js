// app/api/webhooks/route.js (or .ts if you're using TypeScript)

import { NextResponse } from "next/server";

export const runtime = "nodejs"; // 👈 NEW required syntax for Next.js 13.4+

export async function POST(req) {
  try {
    const body = await req.text();

    // You can replace this with actual Stripe handling logic later
    console.log("Webhook received:", body);

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return new NextResponse("Webhook handler failed", { status: 500 });
  }
}
