import {
  Avatar,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Container from './index.styled';
import { useState, useHistory } from 'react';
import MoreIcon from '../../assets/more-icon.svg?react';
import { AddIcon } from '@chakra-ui/icons';

const ViewDepartment = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    window.location.href = '/add-departments';
  };

  return (
    <Container>
      <Flex gap={'40px'} direction={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Heading fontSize={'2xl'} marginTop={'40px'}>
          Departments
        </Heading>
        <Button color={'#fff'} bgColor={'#0356e8'} gap={'8px'} onClick={handleClick}>
          <AddIcon />
          Add New Departments
        </Button>
        <TableContainer border={'2px solid #E2E8F0'} width={'90%'} borderRadius={'12px'}>
          <Table size='sm'>
            <Thead>
              <Tr height={'50px'}>
                <Th>DEPARTMENT NAME</Th>
                <Th>DEPARTMENT MANAGER</Th>
                <Th>MEMBERS</Th>
                <Th>MORE</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr height={'50px'}>
                <Td>Management</Td>
                <Td>Motco Ana</Td>
                <Td>
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  <Avatar src='https://bit.ly/ryan-florence' size={'sm'} />
                  <Avatar src='https://bit.ly/prosper-baba' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>IT</Td>
                <Td>Mark Chandler</Td>
                <Td>
                  <Avatar src='https://bit.ly/dan-abramov' size={'sm'} />
                  <Avatar src='https://bit.ly/tioluwani-kolawole' size={'sm'} />
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Container>
  );
};
export default ViewDepartment;
