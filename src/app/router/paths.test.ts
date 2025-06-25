import { describe, it, expect } from 'vitest';
import { paths } from './paths';

describe('paths', () => {
  it('should define the main path correctly', () => {
    expect(paths.main).toBe('/');
  });
});
