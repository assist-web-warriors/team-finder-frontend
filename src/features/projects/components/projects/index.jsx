import { useState } from 'react';
import { PageTitle, ProjectCard, ProjectsTable } from 'src/shared/ui';
import { ProjectsFilter } from '../projects-filter';
import { projectsTableHeaders } from '../lib';
import { Box, ProjectsCardList, ProjectsTableContainer } from './index.styled';

const Projects = ({ list }) => {
  const [items, setItems] = useState(list || []);
  const [mode, setMode] = useState('list');

  return (
    <Box>
      <PageTitle title='Projects' />
      <ProjectsFilter projects={list} setProjects={setItems} setDisplayMode={setMode} />
      {mode === 'grid' ? (
        <ProjectsCardList>
          {items &&
            items.map((project) => (
              <ProjectCard project={project} mode='list' key={project.title} />
            ))}
        </ProjectsCardList>
      ) : (
        mode === 'list' && (
          <ProjectsTableContainer>
            <ProjectsTable projects={items} columnHeaders={projectsTableHeaders} />
          </ProjectsTableContainer>
        )
      )}
    </Box>
  );
};

export default Projects;
