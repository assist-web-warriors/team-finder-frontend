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

const AuthGuard = ({ children }) => {
  const { isAuthorized } = useSelector(selectUserData);
  const location = useLocation();

  if (!isAuthorized) return <Navigate to='auth/signup' state={{ from: location }} />;
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
    path: '',
    element: (
      <AuthGuard>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthGuard>
    ),
    errorElement: <>404</>, // to do <AppNotFound />
    children: [
      { path: 'organization', element: <OrganizationPage /> },
      { path: 'departments', element: <DepartmentPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'project-details/:id', element: <ProjectDetails /> },
      { path: 'add-departments', element: <AddDepartments /> },
      { path: 'teams', element: <Team /> },
      { path: 'add-team-role', element: <AddTeamRole /> },
      { path: 'personal', element: <ViewProfile /> },
      { path: 'skills', element: '' },
    ],
  },
]);
