import { describe, expect, it } from 'vitest';
import { createMockReply } from '../src/chat/mockChat';

describe('createMockReply trimming', () => {
  it('trims surrounding whitespace from the prompt', () => {
    const reply = createMockReply('  spaced prompt  ');

    expect(reply.content).toContain('"spaced prompt"');
    expect(reply.content).not.toContain('  spaced prompt  ');
  });
});
