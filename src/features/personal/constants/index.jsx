import { Menu } from 'src/common';

const CONSTANTS = {
  TABLE: {
    SKILL: [
      {
        accessorKey: 'skill',
        header: '  SKILL NAME',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'endorsments',
        header: 'SKILL ENDORMENTS',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'level',
        header: 'SKILL LEVEL',
        cell: (cell) => cell.getValue(),
      },
      {
        accessorKey: 'experience',
        header: 'EXPERIENCE',
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
