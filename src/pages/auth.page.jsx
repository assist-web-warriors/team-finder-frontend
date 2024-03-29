import { useRoutes, Navigate } from 'react-router-dom';
import {
  LoginForm,
  SignupForm,
  ForgotPasswordForm,
  ResetPaswordForm,
  EmployeeSignUpForm,
} from 'src/features';

const AuthPages = () => {
  const routes = [
    { path: '*', element: <Navigate to='/auth/signup/organization' /> },
    { path: 'login', element: <LoginForm /> },
    { path: 'signup/organization', element: <SignupForm /> },
    { path: 'signup/employee', element: <SignupForm /> },
    { path: 'forgot-password', element: <ForgotPasswordForm /> },
    { path: 'reset-password', element: <ResetPaswordForm /> },
    { path: ':orgId/:orgOwner', element: <EmployeeSignUpForm /> },
  ];

  const AuthRoutes = useRoutes(routes);

  return AuthRoutes;
};

export default AuthPages;
