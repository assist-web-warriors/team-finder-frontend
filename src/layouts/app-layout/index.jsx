import { Navigation, Sidebar } from 'src/common';
import Container from './index.styled';

const AppLayout = ({ children }) => {
  return (
    <Container>
      {children}
      <Navigation />
      <Sidebar />
    </Container>
  );
};

export default AppLayout;
