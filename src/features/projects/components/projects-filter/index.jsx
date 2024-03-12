import { Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { Search2Icon, HamburgerIcon } from '@chakra-ui/icons';
import ProjectIcon from 'src/common/assets/project-icon.svg?react';
import {
  FilterContainer,
  FilterOptions,
  SearchContainer,
  DisplayModeOptions,
} from './index.styled';
import { CustomSelectOption } from 'src/shared/ui';

export const ProjectsFilter = ({ projects, setProjects, setDisplayMode }) => {
  const handleSearchChange = (e) => {
    const filter = projects.filter(
      (project) => project.title.toLowerCase().includes(e.target.value), // filter by title is best aproach ?
    );
    setProjects(filter);
  };

  const handleSelectChange = (e) => {
    const filter = projects.filter((project) =>
      project.status.toLowerCase().includes(e.target.value),
    );
    setProjects(filter);
  };

  return (
    <FilterContainer>
      <SearchContainer>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon color='gray' />
          </InputLeftElement>
          <Input type='text' placeholder='Search project' onChange={handleSearchChange} />
        </InputGroup>
      </SearchContainer>

      <FilterOptions>
        <DisplayModeOptions>
          <Button variant='outline' onClick={() => setDisplayMode('grid')}>
            <ProjectIcon style={{ width: '15px' }} />
          </Button>
          <Button variant='outline' onClick={() => setDisplayMode('list')}>
            <HamburgerIcon />
          </Button>
        </DisplayModeOptions>

        <CustomSelectOption
          list={[
            { option: 'In progress', value: 'in progress' },
            { option: 'Done', value: 'done' },
          ]}
          h='40px'
          color='black'
          onChange={handleSelectChange}
        />
      </FilterOptions>
    </FilterContainer>
  );
};
