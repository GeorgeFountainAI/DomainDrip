export const runtime = 'edge';

export async function POST(req) {
  try {
    const body = await req.json();

    // ✅ Example logic for a webhook payload
    console.log('Webhook received:', body);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Webhook error:', error);

    return new Response(JSON.stringify({ success: false, error: 'Invalid payload' }), {
      status: 400,
    });
  }
}
