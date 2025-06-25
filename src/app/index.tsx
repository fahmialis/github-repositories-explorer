import { StrictMode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from './router/routes.tsx';
import { queryClient } from '../lib/react-query.ts';
import './index.css';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}
