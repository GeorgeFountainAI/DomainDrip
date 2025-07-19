export const runtime = 'edge';

export async function POST(request) {
  try {
    const body = await request.json();

    // ✅ Do something with the webhook data
    console.log("Webhook received:", body);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Webhook Error:", error);

    return new Response(JSON.stringify({ success: false, error: 'Invalid payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
