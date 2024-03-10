import { Navigate, Outlet, createBrowserRouter, useLocation } from 'react-router-dom';
import { AppLayout, AuthLayout } from 'src/layouts';
import { OrganizationPage, AuthPages, DepartmentPage } from 'src/pages';
import AddDepartment from 'src/pages/add-departments';

const AuthGuard = ({ children }) => {
  const isAuthorized = true;
  const location = useLocation();

  if (!isAuthorized) return <Navigate to='auth/signup' state={{ from: location }} />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayout />,
    errorElement: <>404</>,
    children: [
      { path: '', element: <Navigate to='signup' /> },
      { path: '*', element: <AuthPages /> },
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
  {
    path: '/add-departments',
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
        element: <AddDepartment />,
      },
    ],
  },
]);
