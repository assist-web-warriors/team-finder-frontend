import { Navigate, Outlet, createBrowserRouter, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppLayout, AuthLayout } from 'src/layouts';
import {
  OrganizationPage,
  AuthPages,
  DepartmentPage,
  ProjectsPage,
  ProjectDetails,
  AddDepartments,
  AddTeamRole,
} from 'src/pages';

import { Team } from 'src/features';
import ViewProfile from 'src/features/personal/components/ViewProfile';
import { selectUserData } from 'src/entities/user';
import Skills from 'src/pages/skills';
import Home from 'src/features/home/components/Home';

const AuthGuard = ({ children }) => {
  const { isAuthorized } = useSelector(selectUserData);
  const location = useLocation();

  if (!isAuthorized) return <Navigate to='/auth/signup' state={{ from: location }} />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayout />,
    errorElement: <>404</>, // to do <AuthNotFound />
    children: [
      { path: '', element: <Navigate to='signup' /> },
      { path: '*', element: <AuthPages /> },
    ],
  },
  {
    path: '/',
    errorElement: <>404</>,
    children: [{ path: '', element: <Home /> }],
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
    children: [{ path: '', element: <OrganizationPage /> }],
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
    children: [{ path: '', element: <DepartmentPage /> }],
  },
  {
    path: '/projects',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <ProjectsPage /> }],
  },
  {
    path: '/project-details/:id',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <ProjectDetails /> }],
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
    children: [{ path: '', element: <AddDepartments /> }],
  },
  {
    path: '/teams',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <Team /> }],
  },
  {
    path: '/add-team-role',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <AddTeamRole /> }],
  },
  {
    path: '/personal',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <ViewProfile /> }],
  },
  {
    path: '/skills',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <Skills /> }],
  },
]);
