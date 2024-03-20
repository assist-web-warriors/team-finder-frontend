import { Button, Flex, Text } from '@chakra-ui/react';
import Container from './index.styled';
import logo from '../../assets/team-finder-logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CONSTANTS from 'src/common/constants';
import { clearUserData, selectUserData } from 'src/entities/user';

const Navigation = () => {
  const session = useSelector(selectUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(clearUserData());
    navigate(CONSTANTS.PAGES.WELCOME);
  };

  return (
    <Container.Default>
      <Container.Wrapper>
        <Flex gap={'40px'} alignItems={'center'}>
          <img src={logo} alt='Logo' />
          <Flex
            direction={'column'}
            borderLeft={'3px solid var(--chakra-colors-brand-500)'}
            paddingLeft='10px'>
            {session.roles.map((role) => (
              <Text fontSize={'xs'}>{role}</Text>
            ))}
          </Flex>
        </Flex>
        <Button onClick={handleClick} variant={'ghost'} colorScheme={'red'}>
          Logout
        </Button>
      </Container.Wrapper>
    </Container.Default>
  );
};
export default Navigation;
