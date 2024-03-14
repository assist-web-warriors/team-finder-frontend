import { ProjectManagerAssignment, Projects } from '../components';
import { mockProjects, mockMembers } from '../mockData';
import { Container } from './index.styled';

const ProjectsMenu = () => {
  return (
    <Container>
      <ProjectManagerAssignment />
      <Projects projects={mockProjects} members={mockMembers} />
    </Container>
  );
};

export default ProjectsMenu;
