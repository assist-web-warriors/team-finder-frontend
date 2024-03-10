import { Navigate, Outlet, createBrowserRouter, useLocation } from 'react-router-dom';
import { AppLayout, AuthLayout } from 'src/layouts';
import { OrganizationPage, AuthPage, DepartmentPage } from 'src/pages';

const AuthGuard = ({ children }) => {
  const isAuthorized = true;
  const location = useLocation();

  if (!isAuthorized) return <Navigate to='/login' state={{ from: location }} />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: 'login',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <AuthPage />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [
      {
        path: '',
        element: <AppLayout></AppLayout>,
      },
    ],
  },
  {
    path: '/organization',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [
      {
        path: '',
        element: <OrganizationPage />,
      },
    ],
  },
  {
    path: '/departments',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [
      {
        path: '',
        element: <DepartmentPage />,
      },
    ],
  },
]);
