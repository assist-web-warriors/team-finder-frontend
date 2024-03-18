import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDepartmentItems } from 'src/entities/department';
import { useViewColumns } from '../../hooks';

const mockData = [
  {
    id: 0,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 1,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 2,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 2,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 3,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 4,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 5,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 6,
    name: 'FrontEnd',
    manager: 'Jane Doe',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 7,
    name: 'BackEnd',
    manager: 'Jenny William',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
  {
    id: 8,
    name: 'BackEnd',
    manager: 'Jenny William',
    users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
  },
];

const ViewDepartment = () => {
  const dispatch = useDispatch();
  const department = useSelector((store) => store.department);
  const columns = useViewColumns();

  React.useEffect(() => {
    // TODO: mockData should come from useDepartmentMutation hook from department-api
    // dispatch action to update store
    dispatch(setDepartmentItems(mockData));
  }, [dispatch]);

  return (
    <Container>
      <Flex gap={'40px'} direction={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Heading fontSize={'2xl'}>Departments</Heading>
        <Link to='/add-departments'>
          <Button color={'#fff'} bgColor={'#0356e8'} gap={'8px'}>
            <AddIcon />
            Add New Departments
          </Button>
        </Link>
        <Table columns={columns} data={department.items} />
      </Flex>
    </Container>
  );
};
export default ViewDepartment;
