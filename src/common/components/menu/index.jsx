import { MenuButton, Menu, MenuItem, MenuList } from '@chakra-ui/react';
import Container from './index.styled';
import MoreIcon from '../../assets/more-icon.svg?react';

const MenuComponent = () => {
  return (
    <Container>
      <Menu>
        <MenuButton>
          <MoreIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Delete</MenuItem>
          <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
};
export default MenuComponent;
