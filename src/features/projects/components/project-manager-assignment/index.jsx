import { Button } from '@chakra-ui/react';
import { CustomSelectOption, PageTitle } from 'src/shared/ui';
import { PojectManagerTable } from '../poject-manager-table';
import { Box, SelectWrapper, HeaderContainer } from './index.styled';
import { users, select, managerTableHeaders } from '../lib';

const ProjectManagerAssignment = () => {
  return (
    <Box>
      <PageTitle title='Project manager assignments'>
        {/* TODO: Handle manager assign */}
        <Button>Save</Button>
      </PageTitle>
      <HeaderContainer>
        <SelectWrapper>
          <CustomSelectOption
            placeholder='Add new project manager'
            list={select}
            border='1px solid #0356E8'
          />
        </SelectWrapper>
        <PojectManagerTable users={users} columnHeaders={managerTableHeaders} />
      </HeaderContainer>
    </Box>
  );
};

export default ProjectManagerAssignment;
