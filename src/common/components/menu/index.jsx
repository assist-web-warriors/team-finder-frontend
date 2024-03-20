import { MenuButton, Menu as ChakraMenu, MenuItem, MenuList } from '@chakra-ui/menu';
import Container from './index.styled';
import MoreIcon from '../../assets/more-icon.svg?react';
import { Spinner, Text } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const Menu = ({ deleteProps, editProps, isLoading }) => {
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <ChakraMenu>
          <MenuButton>
            <MoreIcon />
          </MenuButton>
          <MenuList>
            <MenuItem gap={'10px'} {...editProps}>
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem gap={'10px'} {...deleteProps}>
              <DeleteIcon color={'red.500'} /> <Text color={'red.500'}> Delete</Text>
            </MenuItem>
          </MenuList>
        </ChakraMenu>
      )}
    </Container>
  );
};
export default Menu;
