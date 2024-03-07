import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import CONSTANTS from 'src/common/constants';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Container>
      <Flex
        gap={'28px'}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
        bgColor={'white'}
        width={'255px'}
        height={'202px'}
        borderRadius={'8px'}>
        <Avatar
          name='Segun Adebayo'
          src='https://bit.ly/sage-adebayo'
          size={'xl'}
          position={'relative'}
          marginTop={'calc(4rem * -1)'}
        />
        <Heading color={'black'} fontSize={'lg'}>
          Sam Smitch
        </Heading>
        <Text fontSize='xs'>user@yahoo.com</Text>
        <Button width={'147px'} height={'32px'} fontSize={'xs'}>
          View Profile
        </Button>
      </Flex>
      <Flex
        color={'black'}
        gap={'15px'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        fontSize={'lg'}
        borderRadius={'8px'}
        width={'255px'}
        height={'408px'}
        bgColor={'#fff'}
        direction={'column'}
        fontWeight={'400'}>
        <Link to={CONSTANTS.SIDEBAR_PAGES.ORGANIZATION.URL}>
          {CONSTANTS.SIDEBAR_PAGES.ORGANIZATION.NAME}
        </Link>
        <Link to={CONSTANTS.SIDEBAR_PAGES.DEPARTMENTS.NAME}>
          {CONSTANTS.SIDEBAR_PAGES.DEPARTMENTS.NAME}
        </Link>
        <Link to={CONSTANTS.SIDEBAR_PAGES.PERSONAL.NAME}>
          {CONSTANTS.SIDEBAR_PAGES.PERSONAL.NAME}
        </Link>
        <Link to={CONSTANTS.SIDEBAR_PAGES.TEAM.NAME}>{CONSTANTS.SIDEBAR_PAGES.TEAM.NAME}</Link>
        <Link to={CONSTANTS.SIDEBAR_PAGES.PROJECTS.NAME}>
          {CONSTANTS.SIDEBAR_PAGES.PROJECTS.NAME}
        </Link>
      </Flex>
    </Container>
  );
};
export default Sidebar;
