import { Navigation, Sidebar } from 'src/common';
import Container from './index.styled';

const AppLayout = ({ children }) => {
  return (
    <Container.Default>
      <Navigation />
      <Container.Wrapper>
        <Container.Content>
          <Sidebar />
          <Container.Children>{children}</Container.Children>
        </Container.Content>
      </Container.Wrapper>
    </Container.Default>
  );
};

export default AppLayout;
