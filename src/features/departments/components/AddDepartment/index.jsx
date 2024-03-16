import { Button, Flex, Heading, Select } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';

const AddDepartment = () => {
  return (
    <Container>
      <Flex gap={'20px'} direction={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Flex gap={'20px'}>
          <Heading fontSize={'2xl'}>Add Departments</Heading>
          <Button bgColor={'#fff'} color={'#D0D5DD'} border={'1px solid #D0D5DD'}>
            Save
          </Button>
        </Flex>
        <Flex width={'90%'} justifyContent={'space-between'} gap={'24px'}>
          <Select
            cursor={'pointer'}
            bgColor={'white'}
            width={'50%'}
            placeholder='Enter department name'
            border={'2px solid #D0D5DD'}
            color={'gray.300'}>
            <option value='option1'>FrontEnd</option>
            <option value='option2'>UI/Ux</option>
            <option value='option3'>BackEnd</option>
          </Select>
          <Select
            cursor={'pointer'}
            bgColor={'#fff'}
            width={'50%'}
            placeholder='Enter department manager'
            border={'2px solid #D0D5DD'}
            color={'gray.300'}>
            <option value='option1'>Motco Ana</option>
            <option value='option2'>Sofron Lavinia</option>
            <option value='option3'>Maxim Iulia</option>
          </Select>
        </Flex>
        <Heading fontSize={'14px'} color={'#4D5464'}>
          Current members
        </Heading>
        <Table />
        <Heading fontSize={'14px'} color={'#4D5464'}>
          Assign members
        </Heading>
        <Table />
        <Button bgColor={'#fff'} color={'#D0D5DD'} border={'1px solid #D0D5DD'} gap={'20px'}>
          <AddIcon />
          Add members
        </Button>
      </Flex>
    </Container>
  );
};
export default AddDepartment;
