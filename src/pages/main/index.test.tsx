import { describe } from 'vitest';
import Main from '.';
import { renderWithQueryClient } from '@/app/test/utils';

describe('Main', () => {
  it('renders without crashing', () => {
    renderWithQueryClient(<Main />);
    expect(document.body).toBeTruthy();
  });
});
