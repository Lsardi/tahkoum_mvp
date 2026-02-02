export interface OllamaMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OllamaConfig {
  baseUrl: string;
  model: string;
}

const DEFAULT_CONFIG: OllamaConfig = {
  baseUrl: 'http://localhost:11434',
  model: 'llama3.1:8b',
};

let config = { ...DEFAULT_CONFIG };

export function setOllamaConfig(newConfig: Partial<OllamaConfig>) {
  config = { ...config, ...newConfig };
}

export async function chatWithOllama(
  messages: OllamaMessage[],
  options?: { temperature?: number; maxTokens?: number }
): Promise<string> {
  try {
    const res = await fetch(`${config.baseUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: config.model,
        messages,
        stream: false,
        options: {
          temperature: options?.temperature ?? 0.7,
          num_predict: options?.maxTokens ?? 512,
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`Ollama error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.message?.content ?? '';
  } catch (error) {
    console.error('Ollama request failed:', error);
    throw error;
  }
}

export async function generateWithOllama(
  prompt: string,
  options?: { temperature?: number; maxTokens?: number }
): Promise<string> {
  try {
    const res = await fetch(`${config.baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: config.model,
        prompt,
        stream: false,
        options: {
          temperature: options?.temperature ?? 0.7,
          num_predict: options?.maxTokens ?? 512,
        },
      }),
    });

    if (!res.ok) {
      throw new Error(`Ollama error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.response ?? '';
  } catch (error) {
    console.error('Ollama generate failed:', error);
    throw error;
  }
}

export async function checkOllamaStatus(): Promise<boolean> {
  try {
    const res = await fetch(`${config.baseUrl}/api/tags`);
    return res.ok;
  } catch {
    return false;
  }
}
