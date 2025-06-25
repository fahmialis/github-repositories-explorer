import { describe, it, expect, afterEach } from 'vitest';
import { createAxiosConfig } from './axios';

describe('createAxiosConfig', () => {
  const originalEnv = import.meta.env;

  afterEach(() => {
    // Reset env after each test
    Object.assign(import.meta.env, originalEnv);
  });

  it('returns config with Authorization header in development mode', () => {
    Object.assign(import.meta.env, {
      MODE: 'development',
      VITE_GITHUB_TOKEN: 'test-token-123',
    });

    const config = createAxiosConfig();
    expect(config).toBeDefined();
    expect(config?.headers?.Authorization).toBe('Bearer test-token-123');
  });

  it('returns undefined if not in development mode', () => {
    Object.assign(import.meta.env, {
      MODE: 'production',
      VITE_GITHUB_TOKEN: 'should-not-be-used',
    });

    const config = createAxiosConfig();
    expect(config).toBeUndefined();
  });
});
