import { useState } from 'react';
import { PageTitle, ProjectCard, ProjectsTable } from 'src/shared/ui';
import { ProjectsFilter } from '../projects-filter';
import { projectsTableHeaders } from '../lib';
import { Box, ProjectsCardList, ProjectsTableContainer } from './index.styled';

const Projects = ({ projects, members }) => {
  const [items, setItems] = useState(projects || []);
  const [mode, setMode] = useState('grid');
  // TODO: filter members by project id
  return (
    <Box>
      <PageTitle title='Projects' />
      <ProjectsFilter projects={projects} setProjects={setItems} setDisplayMode={setMode} />
      {mode === 'grid' ? (
        <ProjectsCardList>
          {items &&
            items.map((project) => (
              <ProjectCard project={project} members={members} mode='list' key={project.title} />
            ))}
        </ProjectsCardList>
      ) : (
        mode === 'list' && (
          <ProjectsTableContainer>
            <ProjectsTable
              projects={items}
              members={members}
              columnHeaders={projectsTableHeaders}
            />
          </ProjectsTableContainer>
        )
      )}
    </Box>
  );
};

export default Projects;
