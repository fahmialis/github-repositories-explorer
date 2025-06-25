// <reference types="@testing-library/jest-dom" />
import '@testing-library/jest-dom';

import { server } from '@/app/mocks/server';

// Start MSW before all tests
beforeAll(() => server.listen());

// Reset handlers after each test (important for isolation)
afterEach(() => server.resetHandlers());

// Stop server after all tests
afterAll(() => server.close());
