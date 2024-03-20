import { TableContainer, Tbody, Td, Th, Thead, Tr, Table as ChakraTable } from '@chakra-ui/react';
import Container from './index.styled';
import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import Pagination from '../pagination';

const TableComponent = ({ data = [], columns }) => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 7,
  });

  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return data.length ? (
    <Container>
      <TableContainer border={'1px solid #E2E8F0'} borderRadius={'12px'} width={'100%'}>
        <ChakraTable width={'100%'}>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </ChakraTable>
      </TableContainer>
      <Pagination
        currentPage={pagination.pageIndex}
        totalPages={table.getPageCount()}
        onPageChange={(page) => table.setPageIndex(page)}
      />
    </Container>
  ) : null;
};
export default TableComponent;
