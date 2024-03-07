import { useRoutes } from 'react-router-dom';
import { LoginForm, SignupForm } from 'src/features';

const AuthPages = () => {
  const routes = [
    { path: 'login', element: <LoginForm /> },
    { path: 'signup', element: <SignupForm /> },
  ];
  const AuthRoutes = useRoutes(routes);

  return AuthRoutes;
};

export default AuthPages;
