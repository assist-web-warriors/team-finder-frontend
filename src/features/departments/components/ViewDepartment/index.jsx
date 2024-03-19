import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDepartmentItems, useGetDepartmentsQuery } from 'src/entities/department';
import { useViewColumns } from '../../hooks';

const ViewDepartment = () => {
  const dispatch = useDispatch();
  const department = useSelector((store) => store.department.items);
  const columns = useViewColumns();

  const { data: fetchedDepartments, refetch } = useGetDepartmentsQuery();

  useEffect(() => {
    if (fetchedDepartments) {
      refetch();
      dispatch(setDepartmentItems(fetchedDepartments));
    }
  }, [dispatch, refetch, fetchedDepartments]);

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
        <Table columns={columns} data={department || []} />
      </Flex>
    </Container>
  );
};
export default ViewDepartment;
