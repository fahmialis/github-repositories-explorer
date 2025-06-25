import { Outlet, Route, createRoutesFromElements } from 'react-router';
import MainWrapper from '../ui/MainWrapper';

// const Main = React.lazy(() => import('@/pages/main'));
// const Error = React.lazy(() => import('@/pages/error'));

import Main from '@/pages/main';
import Error from '@/app/ui/Error';

export const routes = createRoutesFromElements(
  <Route
    element={
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    }
  >
    <Route path="*" element={<Main />} errorElement={<Error />} />
  </Route>
);
