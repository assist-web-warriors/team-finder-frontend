import { CustomSelectOption, PageTitle } from 'src/shared/ui';
import PojectManagerTable from '../poject-manager-table';
import { Box, SelectWrapper, HeaderContainer } from './index.styled';
import { users, headers, select } from '../mockData';

const ProjectManagerAssignment = () => {
  return (
    <Box>
      <PageTitle title='Project manager assignments' />
      <HeaderContainer>
        <SelectWrapper>
          <CustomSelectOption placeholder='Add new project manager' list={select} />
        </SelectWrapper>
        <PojectManagerTable users={users} columnHeaders={headers} />
      </HeaderContainer>
    </Box>
  );
};

export default ProjectManagerAssignment;
