import React from 'react';

const useAddColumns = () => {
  return React.useMemo(
    () => [
      {
        accessorKey: 'users',
        header: 'TOTAL USERS',
        cell: (data) => data.getValue(),
      },
      {
        accessorKey: 'roles',
        header: 'ROLES',
        cell: (data) => data.getValue(),
      },
      {
        accessorKey: 'email',
        header: 'EMAIL',
        cell: (data) => data.getValue(),
      },
      {
        accessorKey: 'experience',
        header: 'EXPERIENCE',
        cell: (data) => data.getValue(),
      },
    ],
    [],
  );
};

export default useAddColumns;
