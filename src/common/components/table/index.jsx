import { TableContainer, Tbody, Td, Th, Thead, Tr, Table } from '@chakra-ui/react';
import Container from './index.styled';
import { MenuComponent, Pagination } from 'src/common';

const TableComponent = ({ data }) => {
  return (
    <Container>
      <TableContainer border={'2px solid #E2E8F0'} width={'100%'} borderRadius={'12px'}>
        <Table size='sm'>
          {/* <Thead>
            {data.map((head, index) => (
              <Tr height={'50px'} key={index}>
                <Th>{head.column1}</Th>
                <Th>{head.column2}</Th>
                <Th>{head.column3}</Th>
                <Th>{head.column4}</Th>
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {data.map((row, index) => (
              <Tr height={'50px'} key={index}>
                <Td>{row.column1}</Td>
                <Td>{row.column2}</Td>
                <Td>{row.column3}</Td>
                <Td cursor={'pointer'}>
                  <MenuComponent />
                </Td>
              </Tr>
            ))}
          </Tbody> */}
        </Table>
      </TableContainer>
      <Pagination />
    </Container>
  );
};
export default TableComponent;
