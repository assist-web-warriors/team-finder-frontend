import { Button } from '@chakra-ui/react';
import Container from './index.styled';
import logo from '../../assets/team-finder-logo.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CONSTANTS from 'src/common/constants';
import { clearUserData } from 'src/entities/user';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(clearUserData());
    navigate(CONSTANTS.PAGES.WELCOME);
  };

  return (
    <Container.Default>
      <Container.Wrapper>
        <img src={logo} alt='Logo' />
        <Button onClick={handleClick} variant={'ghost'} colorScheme={'red'}>
          Logout
        </Button>
      </Container.Wrapper>
    </Container.Default>
  );
};
export default Navigation;
