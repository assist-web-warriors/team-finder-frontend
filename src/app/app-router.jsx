import { createBrowserRouter } from 'react-router-dom';
import { appLayout, authLayout } from 'src/layout';
import Pages from 'src/pages';

const AuthGuard = ({ children }) => {
  // todo authentication check
  return children;
};

export const router = createBrowserRouter([
  { path: 'login', element: authLayout },
  {
    path: '/',
    element: <AuthGuard>{appLayout}</AuthGuard>,
    errorElement: <>404</>,
    children: [{ path: '', element: <Pages /> }],
  },
]);
