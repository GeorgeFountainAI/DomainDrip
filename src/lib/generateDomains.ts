// src/api/generate-domains.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { traits } = req.body;

  if (!traits || !Array.isArray(traits)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const prompt = `Suggest 10 creative, brandable, and short domain names based on the following traits: ${traits.join(
    ', '
  )}. Respond with only the domain names, no explanations.`;

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    const rawText = completion.data.choices[0].text || '';
    const domains = rawText
      .split('\n')
      .map((d) => d.trim())
      .filter((d) => d.length > 0);

    return res.status(200).json({ domains });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to generate domains' });
  }
}
