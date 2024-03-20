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
  Skills,
} from 'src/pages';

import { Team } from 'src/features';
import ViewProfile from 'src/features/personal/components/ViewProfile';
import { selectUserData } from 'src/entities/user';
import CONSTANTS from 'src/common/constants';
import { useMemo } from 'react';
import WelcomePage from 'src/pages/welcome.page';

const AuthGuard = ({ children, forRoles }) => {
  const { isAuthorized, roles } = useSelector(selectUserData);
  const location = useLocation();

  const isAuthPage = useMemo(
    () =>
      CONSTANTS.PAGES.SIGN_UP === location.pathname ||
      CONSTANTS.PAGES.SIGN_IN === location.pathname ||
      location.pathname.includes(CONSTANTS.PAGES.SIGN_UP_AS_EMPLOYEE) ||
      CONSTANTS.PAGES.WELCOME === location.pathname,
    [location],
  );

  const isAccessGranted = useMemo(() => {
    const forRolesSet = new Set(forRoles);
    const sessionRoles = new Set(roles);
    return [...forRolesSet].some((role) => sessionRoles.has(role));
  }, [roles, forRoles]);

  if (!isAuthorized && !isAccessGranted) {
    return <Navigate to={CONSTANTS.PAGES.PERSONAL} state={{ from: location }} />;
  }
  if (isAuthorized && isAuthPage) {
    return <Navigate to={CONSTANTS.PAGES.ORGANIZATION} state={{ from: location }} />;
  }
  if (!isAuthorized && !isAuthPage) {
    return <Navigate to={CONSTANTS.PAGES.SIGN_IN} state={{ from: location }} />;
  }

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
    children: [{ path: '', element: <WelcomePage /> }],
  },
  {
    path: '/organization',
    element: (
      <AuthGuard forRoles={[CONSTANTS.ROLES.ADMIN]}>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <OrganizationPage /> }],
  },
  {
    path: CONSTANTS.PAGES.DEPARTMENTS,
    element: (
      <AuthGuard
        forRoles={[
          CONSTANTS.ROLES.ADMIN,
          CONSTANTS.ROLES.DEPARTMENT_MANAGER,
          CONSTANTS.ROLES.EMPLOYEE,
          CONSTANTS.ROLES.PROJECT_MANAGER,
        ]}>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <DepartmentPage /> }],
  },
  {
    path: CONSTANTS.PAGES.ADD_DEPARTMENT,
    element: (
      <AuthGuard forRoles={[CONSTANTS.ROLES.ADMIN, CONSTANTS.ROLES.DEPARTMENT_MANAGER]}>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <AddDepartments /> }],
  },
  {
    path: '/projects',
    element: (
      <AuthGuard
        forRoles={[
          CONSTANTS.ROLES.ADMIN,
          CONSTANTS.ROLES.DEPARTMENT_MANAGER,
          CONSTANTS.ROLES.EMPLOYEE,
          CONSTANTS.ROLES.PROJECT_MANAGER,
        ]}>
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
      <AuthGuard
        forRoles={[
          CONSTANTS.ROLES.ADMIN,
          CONSTANTS.ROLES.DEPARTMENT_MANAGER,
          CONSTANTS.ROLES.EMPLOYEE,
          CONSTANTS.ROLES.PROJECT_MANAGER,
        ]}>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <ProjectDetails /> }],
  },
  {
    path: '/teams',
    element: (
      <AuthGuard
        forRoles={[
          CONSTANTS.ROLES.ADMIN,
          CONSTANTS.ROLES.DEPARTMENT_MANAGER,
          CONSTANTS.ROLES.EMPLOYEE,
          CONSTANTS.ROLES.PROJECT_MANAGER,
        ]}>
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
      <AuthGuard
        forRoles={[
          CONSTANTS.ROLES.ADMIN,
          CONSTANTS.ROLES.DEPARTMENT_MANAGER,
          CONSTANTS.ROLES.EMPLOYEE,
          CONSTANTS.ROLES.PROJECT_MANAGER,
        ]}>
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
      <AuthGuard
        forRoles={[
          CONSTANTS.ROLES.ADMIN,
          CONSTANTS.ROLES.DEPARTMENT_MANAGER,
          CONSTANTS.ROLES.EMPLOYEE,
          CONSTANTS.ROLES.PROJECT_MANAGER,
        ]}>
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
      <AuthGuard
        forRoles={[
          CONSTANTS.ROLES.ADMIN,
          CONSTANTS.ROLES.DEPARTMENT_MANAGER,
          CONSTANTS.ROLES.EMPLOYEE,
          CONSTANTS.ROLES.PROJECT_MANAGER,
        ]}>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>,
    children: [{ path: '', element: <Skills /> }],
  },
]);
