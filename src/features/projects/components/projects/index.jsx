import { PageTitle, ProjectCard } from 'src/shared/ui';
import { Box, ProjectsList } from './index.styled';

const Projects = ({ list }) => {
  return (
    <Box>
      <PageTitle title='Projects' />
      {/* <Filters /> */}
      <ProjectsList>
        {list && list.map((project) => <ProjectCard project={project} key={project.title} />)}
      </ProjectsList>
    </Box>
  );
};

export default Projects;
