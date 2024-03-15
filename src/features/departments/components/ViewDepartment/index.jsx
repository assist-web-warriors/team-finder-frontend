import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Pagination, TableComponent } from 'src/common';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ViewDepartment = () => {
  const store = useSelector((state) => state.department);
  console.log(store);

  return (
    <Container>
      <Flex gap={'40px'} direction={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Heading fontSize={'2xl'} marginTop={'40px'}>
          Departments
        </Heading>
        <Link to={'/add-departments'}>
          <Button color={'#fff'} bgColor={'#0356e8'} gap={'8px'}>
            <AddIcon />
            Add New Departments
          </Button>
        </Link>
        <TableComponent />
      </Flex>
    </Container>
  );
};
export default ViewDepartment;
