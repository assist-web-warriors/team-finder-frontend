import { Avatar } from '@chakra-ui/react';
import { Menu } from 'src/common';

const CONSTANTS = {
  TABLES: {
    VIEW_COLUMNS: [
      {
        accessorKey: 'name',
        header: 'DEPARTMENT NAME',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'manager',
        header: 'DEPARTMENT MANAGER',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'users',
        header: 'DEPARTMENT MANAGER',
        cell: (cell) => cell.getValue().map(() => <Avatar size={'sm'} />),
      },
      {
        id: 'more',
        header: 'MORE',
        // Add props to menu based on data, you can extract the data from cell first param function
        cell: (cell) => (
          <Menu
            editProps={{
              onClick: (e) => console.log('edit button', cell.row.original),
            }}
            deleteProps={{
              onClick: (e) => console.log('delete button', cell.row.original),
            }}
          />
        ),
      },
    ],
  },
};

export default CONSTANTS;
