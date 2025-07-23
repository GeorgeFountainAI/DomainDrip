export async function POST(request: Request) {
  const body = await request.json();
  const { traits } = body;

  if (!traits || !Array.isArray(traits)) {
    return new Response(JSON.stringify({ error: "Invalid traits" }), { status: 400 });
  }

  const prompt = `
You are a brand consultant and AI domain generator. 
Generate 10 creative, brandable domain name ideas that align with the following traits: ${traits.join(", ")}.
Avoid long names. Prefer .com but include others (.ai, .co, .io, .org) only if they make sense.
Output should be a simple array of domain names like:
["urbanedgehair.com", "trendyroots.io", "funfinity.co"]
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Make sure this is in your .env
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful branding assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
      max_tokens: 250,
    }),
  });

  const data = await response.json();

  try {
    const text = data.choices[0].message.content;
    const domains = JSON.parse(text); // assumes output is a JSON array
    return new Response(JSON.stringify({ domains }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Failed to parse GPT response" }), { status: 500 });
  }
}
