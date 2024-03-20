import { Avatar } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from 'src/common';
import {
  deleteDepartmentItem,
  editDepartmentItem,
  useDeleteDepartmentMutation,
} from 'src/entities/department';

const useViewColumns = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [deleteDepartmentFetch, { isLoading, isSuccess: isDeleteSuccess, isError: isDeleteError }] =
    useDeleteDepartmentMutation();

  const handleEdit = React.useCallback(
    (data) => {
      // TODO: call the fetch function from useEditDepartmentMutation hook
      dispatch(editDepartmentItem(data.row.original));
    },
    [dispatch],
  );
  const handleDelete = React.useCallback(
    async (data) => {
      await deleteDepartmentFetch({ id: data.row.original.id });
      dispatch(deleteDepartmentItem(data.row.original.id));
    },
    [dispatch, deleteDepartmentFetch],
  );

  useEffect(() => {
    if (isDeleteError) {
      toast({
        title: "Can't delete the department. Try again later.",
        status: 'error',
        isClosable: true,
      });
    }
  }, [isDeleteError, toast]);

  useEffect(() => {
    if (isDeleteSuccess) {
      toast({
        title: 'The department was deleted succesfully.',
        status: 'success',
        isClosable: true,
      });
    }
  }, [isDeleteSuccess, toast]);

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
        cell: (data) => (data.getValue() || []).map(() => <Avatar size={'sm'} />),
      },
      {
        id: 'more',
        header: 'MORE',
        cell: (data) => (
          <Menu
            isLoading={isLoading}
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
    [handleDelete, handleEdit, isLoading],
  );
};

export default useViewColumns;
