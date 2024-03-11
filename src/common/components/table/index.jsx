import {
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Table,
} from '@chakra-ui/table';
import Container from './index.styled';
import { MenuComponent } from 'src/common';

const TableComponent = () => {
  return (
    <Container>
      <TableContainer border={'2px solid #E2E8F0'} width={'100%'} borderRadius={'12px'}>
        <Table size='sm'>
          <Thead>
            <Tr height={'50px'}>
              <Th>NAME</Th>
              <Th>ROLE</Th>
              <Th>EMAIL</Th>
              <Th>MORE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr height={'50px'}>
              <Td>Segun Adebayo</Td>
              <Td>Admin</Td>
              <Td>sage@chakra-ui.com</Td>
              <Td cursor={'pointer'}>
                <MenuComponent />
              </Td>
            </Tr>
            <Tr height={'50px'}>
              <Td>Mark Chandler</Td>
              <Td>Admin</Td>
              <Td>sage@chakra-ui.com</Td>
              <Td cursor={'pointer'}>
                <MenuComponent />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default TableComponent;
