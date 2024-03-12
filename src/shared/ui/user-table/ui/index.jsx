import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const UserTable = ({ users, columnHeaders }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr height={'50px'}>
            {columnHeaders && columnHeaders.map((header) => <Th key={header}>{header}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {users &&
            users.map((user) => (
              <Tr height={'50px'} key={user.email}>
                <Td>{user.name}</Td>
                <Td>{user.role}</Td>
                <Td>{user.email}</Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <HamburgerIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => {}}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
