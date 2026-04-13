export type ChatRole = 'user' | 'assistant';

export interface ChatMessage {
  role: ChatRole;
  content: string;
  timestamp: string;
}

export function createSeedMessages(): ChatMessage[] {
  return [
    {
      role: 'assistant',
      content: 'Olá! Eu sou um clone local estilo ChatGPT. Envie uma mensagem para testar a interface.',
      timestamp: new Date().toISOString()
    }
  ];
}

export function createMockReply(prompt: string): ChatMessage {
  const trimmed = prompt.trim();
  const reply = trimmed
    ? `Echo mock: recebi "${trimmed}". Aqui você pode plugar uma LLM real depois.`
    : 'Echo mock: mensagem vazia.';

  return {
    role: 'assistant',
    content: reply,
    timestamp: new Date().toISOString()
  };
}
