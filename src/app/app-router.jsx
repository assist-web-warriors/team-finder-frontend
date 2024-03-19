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
import CONSTANTS from 'src/common/constants';
import { useMemo } from 'react';

const AuthGuard = ({ children }) => {
  const { isAuthorized } = useSelector(selectUserData);
  const location = useLocation();

  const isAuthPage = useMemo(
    () =>
      CONSTANTS.PAGES.SIGN_UP === location.pathname ||
      CONSTANTS.PAGES.SIGN_IN === location.pathname ||
      CONSTANTS.PAGES.WELCOME === location.pathname,
    [location],
  );

  if (isAuthorized && isAuthPage)
    return <Navigate to={CONSTANTS.PAGES.PERSONAL} state={{ from: location }} />;
  if (!isAuthorized && !isAuthPage)
    return <Navigate to={CONSTANTS.PAGES.SIGN_IN} state={{ from: location }} />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: 'auth',
    element: (
      <AuthGuard>
        <AuthLayout />
      </AuthGuard>
    ),
    errorElement: <>404</>, // to do <AuthNotFound />
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
