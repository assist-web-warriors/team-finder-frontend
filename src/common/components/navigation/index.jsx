import { Avatar, Flex, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Container from './index.styled';
import { Link } from 'react-router-dom';
import CONSTANTS from 'src/common/constants';
import logo from '../../assets/team-finder-logo.svg';
import { SearchIcon } from '@chakra-ui/icons';

const Navigation = () => {
  return (
    <Container>
      <img src={logo} alt='Logo' />
      <InputGroup width={'261px'} height={'32px'} color='gray.300' bgColor={'#FFF'}>
        <InputRightElement pointerEvents='none' bgColor={'#fff'}>
          <SearchIcon bgColor={'#fff'} />
        </InputRightElement>
        <Input type='search' placeholder='Search...'></Input>
      </InputGroup>
      <Flex bgColor={'#fff'} gap={'24px'} alignItems={'center'}>
        <Link to={CONSTANTS.NAVIGATION_PAGES.HOME.URL}>{CONSTANTS.NAVIGATION_PAGES.HOME.NAME}</Link>
        <Link to={CONSTANTS.NAVIGATION_PAGES.ADDITIONAL_CONTEXT.URL}>
          {CONSTANTS.NAVIGATION_PAGES.ADDITIONAL_CONTEXT.NAME}
        </Link>
        <Link to={CONSTANTS.NAVIGATION_PAGES.NOTIFICATION.URL}>
          {CONSTANTS.NAVIGATION_PAGES.NOTIFICATION.NAME}
          <Icon marginLeft={'10px'} bgColor={'#fff'} />
        </Link>

        <Flex>
          <Avatar
            name='Segun Adebayo'
            src='https://bit.ly/sage-adebayo'
            size={'sm'}
            bgColor={'#fff'}
          />
        </Flex>
      </Flex>
    </Container>
  );
};
export default Navigation;
