import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const CustomEditButton = () => {
  // TODO: Add universal event handling
  return (
    <Menu>
      <MenuButton>
        <HamburgerIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>Delete</MenuItem>
        <MenuItem onClick={() => {}}>Edit</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CustomEditButton;
