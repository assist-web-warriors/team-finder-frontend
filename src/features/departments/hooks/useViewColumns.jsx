import { Avatar } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from 'src/common';
import { deleteDepartmentItem, editDepartmentItem } from 'src/entities/department';

const useViewColumns = () => {
  const dispatch = useDispatch();

  const handleEdit = React.useCallback(
    (data) => {
      // console.log(data.row.original);
      // TODO: call the fetch function from useEditDepartmentMutation hook
      dispatch(editDepartmentItem(data.row.original));
    },
    [dispatch],
  );
  const handleDelete = React.useCallback(
    (data) => {
      // console.log(data.row.original);
      dispatch(deleteDepartmentItem(data.row.original.id));
    },
    [dispatch],
  );

  return React.useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'DEPARTMENT NAME',
        cell: (data) => data.getValue(),
      },
      {
        accessorKey: 'manager',
        header: 'DEPARTMENT MANAGER',
        cell: (data) => data.getValue(),
      },
      {
        accessorKey: 'users',
        header: 'MEMBERS',
        cell: (data) => data.getValue().map(() => <Avatar size={'sm'} />),
      },
      {
        id: 'more',
        header: 'MORE',
        cell: (data) => (
          <Menu
            editProps={{
              onClick: () => handleEdit(data),
            }}
            deleteProps={{
              onClick: () => handleDelete(data),
            }}
          />
        ),
      },
    ],
    [handleDelete, handleEdit],
  );
};

export default useViewColumns;
