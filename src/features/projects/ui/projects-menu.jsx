import { ProjectManagerAssignment, Projects } from '../components';
import { mockProjects } from '../mockData';
import { Container } from './index.styled';

const ProjectsMenu = () => {
  return (
    <Container>
      <ProjectManagerAssignment />
      <Projects list={mockProjects} />
    </Container>
  );
};

export default ProjectsMenu;
