import { describe } from 'vitest';
import Main from '.';
import { renderWithQueryClient } from '@/app/test/utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';

describe('Main', () => {
  it('renders without crashing', () => {
    renderWithQueryClient(<Main />);
    expect(document.body).toBeTruthy();
  });

  it('renders submitted search key when search is triggered', async () => {
    renderWithQueryClient(<Main />);

    fireEvent.change(screen.getByTestId('search-bar'), {
      target: { value: 'fahmi' },
    });

    fireEvent.click(screen.getByTestId('search-button'));

    await waitFor(() => {
      expect(screen.getByTestId('current-search')).toBeInTheDocument();
      expect(screen.getByTestId('current-search').textContent).toContain(
        'fahmi'
      );
    });
  });

  it('renders user collapse section after search', async () => {
    renderWithQueryClient(<Main />);

    fireEvent.change(screen.getByTestId('search-bar'), {
      target: { value: 'fahmi' },
    });

    fireEvent.click(screen.getByTestId('search-button'));

    await waitFor(() => {
      const collapses = screen.getAllByTestId('user-collapse');
      expect(collapses.length).toBeGreaterThan(0);
    });
  });

  it('renders repository cards after expanding collapse', async () => {
    renderWithQueryClient(<Main />);

    fireEvent.change(screen.getByTestId('search-bar'), {
      target: { value: 'fahmi' },
    });

    fireEvent.click(screen.getByTestId('search-button'));

    const collapses = await screen.findAllByTestId('user-collapse');
    expect(collapses.length).toBeGreaterThan(0);

    const collapseHeader = collapses[0].querySelector('.ant-collapse-header');
    expect(collapseHeader).toBeTruthy();

    if (collapseHeader) {
      fireEvent.click(collapseHeader);
    }
  });
});
