import { Navigate, Outlet, createBrowserRouter, useLocation } from 'react-router-dom';
import ViewProjectDetails from 'src/features/projects/components/ViewProjectDetails';
import { AppLayout, AuthLayout } from 'src/layouts';
import {
  OrganizationPage,
  AuthPages,
  DepartmentPage,
  ProjectsPage,
  AddDepartment,
  AddTeamRole,
} from 'src/pages';
import { Team } from 'src/features';

const AuthGuard = ({ children }) => {
  const isAuthorized = true;
  const location = useLocation('');

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
      { path: 'add-departments', element: <AddDepartment /> },
      { path: 'teams', element: <Team /> },
      { path: 'add-team-role', element: <AddTeamRole /> },
      { path: 'project-details', element: <ViewProjectDetails /> },
    ],
  },
]);
