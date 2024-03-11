import { TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import Container from './index.styled';
import { Avatar } from '@chakra-ui/avatar';
import { MenuComponent } from 'src/common';

const Table = () => {
  return (
    <Container>
      <TableContainer border={'2px solid #E2E8F0'} width={'100%'} borderRadius={'12px'}>
        <Table size='sm'>
          <Thead>
            <Tr height={'50px'}>
              <Th>TOTAL USERS</Th>
              <Th>ROLE</Th>
              <Th>EMAIL</Th>
              <Th>Experience</Th>
              <Th>MORE</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr height={'50px'}>
              <Td>
                <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                Motco Ana
              </Td>
              <Td>Managment</Td>
              <Td>sage@chakra-ui.com</Td>
              <Td>1.5 years</Td>
              <Td>
                <MenuComponent />
              </Td>
            </Tr>
            <Tr height={'50px'}>
              <Td>
                <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                Motco Ana
              </Td>
              <Td>Managment</Td>
              <Td>sage@chakra-ui.com</Td>
              <Td>1.5 years</Td>
              <Td>
                <MenuComponent />
              </Td>
            </Tr>
            <Tr height={'50px'}>
              <Td>
                <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                Motco Ana
              </Td>
              <Td>Managment</Td>
              <Td>sage@chakra-ui.com</Td>
              <Td>1.5 years</Td>
              <Td>
                <MenuComponent />
              </Td>
            </Tr>
            <Tr height={'50px'}>
              <Td>
                <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                Motco Ana
              </Td>
              <Td>Managment</Td>
              <Td>sage@chakra-ui.com</Td>
              <Td>1.5 years</Td>
              <Td>
                <MenuComponent />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Table;
