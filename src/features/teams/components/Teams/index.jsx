import {
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import MoreIcon from '../../assets/more-icon.svg?react';
import { useState } from 'react';

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    window.location.href = '/add-team-role';
  };
  return (
    <Container>
      <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontSize={'24px'}>Team roles</Heading>
        <Button bgColor={'#0356E8'} color={'#fff'} gap={'10px'} onClick={handleClick}>
          <AddIcon />
          Add Team Role
        </Button>
      </Flex>
      <TableContainer border={'2px solid #E2E8F0'} width={'100%'} borderRadius={'12px'}>
        <Table>
          <Thead>
            <Tr>
              <Th>TEAM ROLES</Th>
              <Th>ROLE DESCRIPTION</Th>
              <Th>MORE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Team Lead</Td>
              <Td>Responsible for overseeing the team and coordinating efforts</Td>
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
            <Tr>
              <Td>Frontend Developer</Td>
              <Td>Build and code the technical aspects of a project </Td>
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
    </Container>
  );
};
export default Team;
