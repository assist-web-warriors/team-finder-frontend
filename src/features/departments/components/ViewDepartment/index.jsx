import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { TableComponent } from 'src/common';

const ViewDepartment = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    window.location.href = '/add-departments';
  };

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
        <TableComponent />
      </Flex>
    </Container>
  );
};
export default ViewDepartment;
