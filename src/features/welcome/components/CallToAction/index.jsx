import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/team-finder-logo.svg';
import CONSTANTS from 'src/common/constants';

const CallToAction = () => {
  return (
    <Container>
      <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} gap={'35px'}>
        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
          <img src={logo} alt='Logo' width={'190px'} />
          <Heading fontSize={'28px'} color={'#596274'}>
            Welcome to our app!
          </Heading>
          <Text fontSize={'18px'}>Manage your team with super features now!</Text>
        </Flex>
        <Flex gap={'25px'}>
          <Link to={CONSTANTS.PAGES.SIGN_UP}>
            <Button bgColor={'#fff'} color={'#0356E8'} border={'1px solid #0356E8'}>
              Sign Up
            </Button>
          </Link>
          <Link to={CONSTANTS.PAGES.SIGN_IN}>
            <Button bgColor={'#0356E8'} color={'#fff'}>
              Sign In
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
export default CallToAction;
