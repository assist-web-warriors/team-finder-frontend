import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { EmptyState, Table } from 'src/common';
import { Link } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDepartmentItems, useGetDepartmentsMutation } from 'src/entities/department';
import { useViewColumns } from '../../hooks';
import CONSTANTS from 'src/common/constants';

const ViewDepartments = () => {
  const dispatch = useDispatch();
  const department = useSelector((store) => store.department);
  const columns = useViewColumns();
  const [getDepartmentsFetch] = useGetDepartmentsMutation();

  const getDepartments = useCallback(async () => {
    const result = await getDepartmentsFetch().unwrap();
    dispatch(setDepartmentItems(result));
  }, [dispatch, getDepartmentsFetch]);

  useEffect(() => {
    getDepartments();
  }, [getDepartments]);

  return (
    <Container>
      <Flex justifyContent={'space-between'} width={'100%'}>
        <Heading fontSize={'2xl'}>Departments</Heading>
        <Link to={CONSTANTS.PAGES.ADD_DEPARTMENT}>
          <Button leftIcon={<AddIcon />}>Add new department</Button>
        </Link>
      </Flex>
      <Table columns={columns} data={department?.items} />
      <EmptyState
        isVisible={!department.items.length}
        headingLabel={'Get started with departments'}
        textLabel={'Please add a new department using the top-left corner button.'}
      />
    </Container>
  );
};
export default ViewDepartments;
