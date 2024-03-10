import { ProjectManagerAssignment, Projects } from '../components';
import { mockData } from '../mockData';
import { Container } from './index.styled';

const ProjectsMenu = () => {
  return (
    <Container>
      <ProjectManagerAssignment />
      <Projects list={mockData} />
    </Container>
  );
};

export default ProjectsMenu;
