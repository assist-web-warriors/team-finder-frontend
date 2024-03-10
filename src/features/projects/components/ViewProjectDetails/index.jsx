import { Flex, Heading, Icon, IconButton, ListIcon } from '@chakra-ui/react';
import Container from './index.styled';
import { CalendarIcon } from '@chakra-ui/icons';
import CONSTANTS from 'src/common/constants';

const ViewProjectDetails = () => {
  const constants = Object.values(CONSTANTS.PROJECTS_DETAILS);

  return (
    <Container>
      <Heading fontSize={'24px'}>Name of the Project</Heading>
      <Flex direction={'column'} color={'#596274'} fontSize={'14px'} gap={'60px'}>
        <Flex direction={'column'} gap={'60px'}>
          {constants.map((value) => (
            <Flex gap={'60px'}>
              <Flex gap={'10px'} alignItems={'center'}>
                <Icon color={'#596274'}>{value.ICON}</Icon>
                <Heading fontSize={'16px'} color={'#596274'}>
                  {value.NAME}
                </Heading>
              </Flex>
              <Flex>{value.ADDITIONAL_CONTENT}</Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
export default ViewProjectDetails;
