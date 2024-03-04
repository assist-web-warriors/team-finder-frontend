import { Navigate, createBrowserRouter, useLocation } from 'react-router-dom';
import { appLayout, authLayout } from 'src/layout';
import { AuthPage } from 'src/pages/auth';

const AuthGuard = ({ children }) => {
  const isAuthorized = true;
  const location = useLocation();

  if (!isAuthorized) return <Navigate to='/login' state={{ from: location }} />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: 'login',
    element: authLayout,
    children: [
      {
        path: '',
        element: <AuthPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthGuard>{appLayout}</AuthGuard>,
    errorElement: <>404</>,
    children: [{ path: '', element: <>Pages</> }],
  },
]);
