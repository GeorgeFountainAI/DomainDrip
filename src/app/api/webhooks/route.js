export const runtime = 'edge';

export async function POST(req) {
  try {
    const body = await req.json();

    // ✅ Do something with the webhook data
    console.log("Webhook received:", body);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error("Webhook error:", err);

    return new Response(JSON.stringify({ success: false, error: "Invalid payload" }), {
      status: 400,
    });
  }
}
