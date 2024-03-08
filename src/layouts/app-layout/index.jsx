import { Navigation, Sidebar } from 'src/common';
import Container from './index.styled';

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
      <Sidebar />
    </Container>
  );
};

export default AppLayout;
