import type { ChatMessage } from '../chat/mockChat';

export function renderChatMessage(message: ChatMessage): string {
  const align = message.role === 'user' ? 'justify-end' : 'justify-start';
  const bubble = message.role === 'user'
    ? 'bg-sky-500 text-white'
    : 'bg-zinc-800 text-zinc-100 border border-zinc-700';

  return `
    <div class="flex ${align}">
      <article class="max-w-[80%] rounded-2xl px-4 py-3 shadow-lg ${bubble}">
        <p class="whitespace-pre-wrap text-sm leading-6">${escapeHtml(message.content)}</p>
      </article>
    </div>
  `;
}

export function renderChatThread(messages: ChatMessage[]): string {
  return messages.map(renderChatMessage).join('\n');
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
