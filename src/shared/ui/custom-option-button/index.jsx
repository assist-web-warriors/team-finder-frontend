import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const CustomOptionButton = ({ items, icon }) => {
  return (
    <Menu>
      <MenuButton>{icon ? icon : <HamburgerIcon />}</MenuButton>
      <MenuList>
        {items &&
          items.map((item) => (
            <MenuItem key={item.buttonName} onClick={item.actionHandler}>
              {item.buttonName}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};
