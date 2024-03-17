import { Menu } from 'src/common';

const CONSTANTS = {
  TABLE: {
    ADD_ADMIN: [
      {
        accessorKey: 'name',
        header: '  NAME',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'role',
        header: 'ROLE',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'email',
        header: 'EMAIL',
        cell: (cell) => cell.getValue(),
      },
      {
        id: 'more',
        header: 'MORE',
        // Add props to menu based on data, you can extract the data from cell first param function
        cell: (cell) => (
          <Menu
            editProps={{
              onClick: (e) => '',
            }}
            deleteProps={{
              onClick: (e) => '',
            }}
          />
        ),
      },
    ],
  },
};
export default CONSTANTS;
