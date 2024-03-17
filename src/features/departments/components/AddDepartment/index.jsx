import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Select,
} from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import CONSTANTS from '../../constants';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDepartmentItem } from 'src/entities/department';

const AddDepartment = () => {
  const data = [
    {
      id: 1,
      users: <Checkbox>Segun Adebayo</Checkbox>,
      roles: 'FrontEnd',
      email: 'mark@chakra-ui.com',
      experience: '1.5years',
    },
    {
      id: 2,
      users: <Checkbox>Segun Adebayo</Checkbox>,
      roles: 'FrontEnd',
      email: 'mark@chakra-ui.com',
      experience: '1.5years',
    },
    {
      id: 3,
      users: <Checkbox>Segun Adebayo</Checkbox>,
      roles: 'FrontEnd',
      email: 'mark@chakra-ui.com',
      experience: '1.5years',
    },
    {
      id: 4,
      users: <Checkbox>Segun Adebayo</Checkbox>,
      roles: 'FrontEnd',
      email: 'mark@chakra-ui.com',
      experience: '1.5years',
    },
    {
      id: 4,
      users: <Checkbox>Segun Adebayo</Checkbox>,
      roles: 'FrontEnd',
      email: 'mark@chakra-ui.com',
      experience: '1.5years',
    },
  ];

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // TODO: call fetch function from useAddDepartmentMutation hook outside the onSubmit
    // dispatch action to update store
    dispatch(
      addDepartmentItem({
        id: 11,
        name: data.name,
        manager: data.manager,
        users: [{ name: 'Jhon Doe', url: '' }],
      }),
    );
  };

  return (
    <Container>
      <Flex gap={'20px'} direction={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Flex gap={'20px'} width={'100%'} justifyContent={'space-between'}>
          <Heading fontSize={'2xl'}>Add Departments</Heading>
          <Flex gap={'20px'}>
            <Button
              _hover={{
                bgColor: '#fff',
                borderRadius: '8px',
                border: '1px solid var(--blue-color)',
                color: '#0356E8',
              }}
              bgColor={'#fff'}
              color={'#D0D5DD'}
              border={'1px solid #D0D5DD'}>
              Cancel
            </Button>
            <Button
              bgColor={true ? '#0356E8' : '#fff'}
              form='department_form'
              _hover={{
                bgColor: '#fff',
                borderRadius: '8px',
                border: '1px solid var(--blue-color)',
                color: '#0356E8',
              }}
              type={'submit'}
              color={'#D0D5DD'}
              border={'1px solid #D0D5DD'}>
              Save
            </Button>
          </Flex>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)} id='department_form'>
          <FormControl isInvalid={errors.name}>
            <FormLabel>Department Name</FormLabel>
            <Select
              id='name'
              {...register('name', { required: true })}
              name='name'
              cursor={'pointer'}
              bgColor={'white'}
              width={'100%'}
              border={'2px solid #D0D5DD'}>
              <option value=''>Select a department</option>
              <option value='manager1'>FrontEnd</option>
              <option value='manager2'>BackEnd</option>
              <option value='manager3'>UI/UX</option>
            </Select>
            <FormErrorMessage>{errors.name && 'Please select a option'}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.manager}>
            <FormLabel>Department Manager/Head</FormLabel>
            <Select
              id='manager'
              {...register('manager', { required: true })}
              name='manager'
              cursor={'pointer'}
              bgColor={'white'}
              width={'100%'}
              border={'2px solid #D0D5DD'}>
              <option value=''>Select a manager</option>
              <option value='manager1'>Manager 1</option>
              <option value='manager2'>Manager 2</option>
              <option value='manager3'>Manager 3</option>
            </Select>
            <FormErrorMessage>{errors.manager && 'Please select a option'}</FormErrorMessage>
          </FormControl>
        </form>
        <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
          <Heading fontSize={'14px'} color={'#4D5464'}>
            Assign members
          </Heading>
          <Button bgColor={'#fff'} color={'#D0D5DD'} border={'1px solid #D0D5DD'} gap={'20px'}>
            <AddIcon />
            Add members
          </Button>
        </Flex>
        <Table columns={CONSTANTS.TABLES.ADD_DEPARTMENTS} data={data} />
      </Flex>
    </Container>
  );
};
export default AddDepartment;
