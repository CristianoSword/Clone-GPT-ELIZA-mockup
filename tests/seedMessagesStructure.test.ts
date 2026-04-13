import { describe, expect, it } from 'vitest';
import { createSeedMessages } from '../src/chat/mockChat';

describe('createSeedMessages', () => {
  it('returns a single assistant welcome message', () => {
    const messages = createSeedMessages();

    expect(messages).toHaveLength(1);
    expect(messages[0]?.role).toBe('assistant');
  });
});
