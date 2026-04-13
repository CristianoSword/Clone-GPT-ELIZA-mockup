import { describe, expect, it } from 'vitest';
import { renderChatMessage } from '../src/views/render';

describe('renderChatMessage escaping', () => {
  it('escapes html tags', () => {
    const html = renderChatMessage({
      role: 'user',
      content: '<strong>x</strong>',
      timestamp: new Date().toISOString()
    });

    expect(html).toContain('&lt;strong&gt;x&lt;/strong&gt;');
  });
});
