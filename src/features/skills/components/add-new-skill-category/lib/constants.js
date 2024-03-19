const headers = [
  {
    accessorKey: 'category',
    header: 'SKILL CATEGORY',
  },
  {
    accessorKey: 'more',
    header: 'MORE',
  },
];

export const columns = headers.map((item) => ({ ...item, cell: (data) => data.getValue() }));
