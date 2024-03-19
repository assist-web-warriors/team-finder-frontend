const headers = [
  {
    accessorKey: 'skill',
    header: 'SKILL NAME',
  },
  {
    accessorKey: 'category',
    header: 'SKILL CATEGORY',
  },
  {
    accessorKey: 'author',
    header: 'AUTHOR',
  },
  {
    accessorKey: 'department',
    header: 'DEPARTMENT',
  },
  {
    accessorKey: 'more',
    header: 'MORE',
  },
];

export const columns = headers.map((item) => ({ ...item, cell: (data) => data.getValue() }));
