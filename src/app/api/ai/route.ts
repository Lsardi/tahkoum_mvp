import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, model = 'llama3.1:8b', temperature = 0.7 } = body;

    const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';

    const res = await fetch(`${ollamaUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        messages,
        stream: false,
        options: { temperature },
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Ollama error: ${res.status}` },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ content: data.message?.content ?? '' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to connect to Ollama. Is it running?' },
      { status: 503 }
    );
  }
}
