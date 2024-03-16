import { MenuButton, Menu as ChakraMenu, MenuItem, MenuList } from '@chakra-ui/menu';
import Container from './index.styled';
import MoreIcon from '../../assets/more-icon.svg?react';

const Menu = ({ deleteProps, editProps }) => {
  return (
    <Container>
      <ChakraMenu>
        <MenuButton>
          <MoreIcon />
        </MenuButton>
        <MenuList>
          <MenuItem {...deleteProps}>Delete</MenuItem>
          <MenuItem {...editProps}>Edit</MenuItem>
        </MenuList>
      </ChakraMenu>
    </Container>
  );
};
export default Menu;
