import { useRoutes, Navigate } from 'react-router-dom';
import { LoginForm, SignupForm, ForgotPasswordForm, ResetPaswordForm } from 'src/features';

const AuthPages = () => {
  const routes = [
    { path: '*', element: <Navigate to='/auth/signup' /> },
    { path: 'login', element: <LoginForm /> },
    { path: 'signup', element: <SignupForm /> },
    { path: 'forgot-password', element: <ForgotPasswordForm /> },
    { path: 'reset-password', element: <ResetPaswordForm /> },
  ];
  const AuthRoutes = useRoutes(routes);

  return AuthRoutes;
};

export default AuthPages;
