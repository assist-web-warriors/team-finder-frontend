import { Avatar, Flex, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Container from './index.styled';
import { Link } from 'react-router-dom';
import CONSTANTS from 'src/common/constants';
import logo from '../../assets/team-finder-logo.svg';
import { SearchIcon, SunIcon } from '@chakra-ui/icons';

const Navigation = () => {
  const constants = Object.values(CONSTANTS.NAVIGATION_PAGES);

  return (
    <Container>
      <img src={logo} alt='Logo' />
      <InputGroup width={'261px'} height={'32px'} color='gray.300' bgColor={'#FFF'}>
        <InputRightElement pointerEvents='none' bgColor={'#fff'}>
          <SearchIcon bgColor={'#fff'} />
        </InputRightElement>
        <Input type='search' placeholder='Search...'></Input>
      </InputGroup>
      <Flex gap={'40px'} bgColor={'#fff'}>
        {constants.map((value) => (
          <Flex bgColor={'#fff'}>
            <Link to={value.URL}>{value.NAME}</Link>
          </Flex>
        ))}
        <Flex bgColor={'#fff'}>
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' size={'sm'} />
        </Flex>
      </Flex>
    </Container>
  );
};
export default Navigation;
