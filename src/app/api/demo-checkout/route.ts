// app/api/demo-checkout/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Fake processing delay to simulate checkout
  await new Promise((res) => setTimeout(res, 1500));

  return NextResponse.json({
    success: true,
    message: "Domain reserved (simulated)",
    domain: body.domain,
    price: body.price,
  });
}
