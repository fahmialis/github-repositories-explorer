import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './index';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });
});
