import { describe, expect, it } from 'vitest';
import { createSeedMessages } from '../src/chat/mockChat';

describe('createSeedMessages content', () => {
  it('contains the onboarding hint', () => {
    const [message] = createSeedMessages();

    expect(message?.content).toContain('ChatGPT');
    expect(message?.content).toContain('interface');
  });
});
