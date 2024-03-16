import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import CONSTANTS from '../../constants';

const ViewDepartment = () => {
  const handleClick = () => {
    window.location.href = '/add-departments';
  };

  // should come from store
  const data = [
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'FrontEnd',
      manager: 'Alexandru Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'BackEnd',
      manager: 'Ana-Maria Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'BackEnd',
      manager: 'Ana-Maria Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'BackEnd',
      manager: 'Ana-Maria Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'BackEnd',
      manager: 'Ana-Maria Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'BackEnd',
      manager: 'Ana-Maria Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'BackEnd',
      manager: 'Ana-Maria Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
    {
      name: 'BackEnd',
      manager: 'Ana-Maria Larion',
      users: [{ name: 'Jhon Doe', avatarUrl: '...' }],
    },
  ];

  return (
    <Container>
      <Flex gap={'40px'} direction={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Heading fontSize={'2xl'} marginTop={'40px'}>
          Departments
        </Heading>
        <Button color={'#fff'} bgColor={'#0356e8'} gap={'8px'} onClick={handleClick}>
          <AddIcon />
          Add New Departments
        </Button>
        <Table columns={CONSTANTS.TABLES.VIEW_COLUMNS} data={data} />
      </Flex>
    </Container>
  );
};
export default ViewDepartment;
