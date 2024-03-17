import { Menu } from 'src/common';

const CONSTANTS = {
  TABLE: {
    TEAMS: [
      {
        accessorKey: 'role',
        header: 'TEAM ROLES',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'description',
        header: 'DESCRIPTION ROLE',
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
