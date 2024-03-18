import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Select,
  useToast,
} from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDepartmentItem, useAddDepartmentMutation } from 'src/entities/department';
import { useAddColumns } from '../../hooks';
import { useCallback, useEffect } from 'react';
import { setManagersItems } from 'src/entities/user/model/user-slice';
import { useGetManagersMutation } from 'src/entities/user/api/user-api';

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

const AddDepartment = () => {
  const toast = useToast();
  const columns = useAddColumns();
  const dispatch = useDispatch();
  // const managers = useSelector((store) => store.user.managers);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [getManagersFetch] = useGetManagersMutation();
  const [addDepartmentFetch, { isLoading, isSuccess, isError }] = useAddDepartmentMutation();

  const onSubmit = async (data) => {
    const result = await addDepartmentFetch({ name: data.name, manager: data.manager }).unwrap();
    dispatch(
      addDepartmentItem({
        id: result.id,
        name: result.name,
        manager: result.manager,
        users: [{ name: 'Jhon Doe', url: '' }],
      }),
    );
  };

  const getManagers = useCallback(async () => {
    const result = await getManagersFetch().unwrap();
    dispatch(setManagersItems(result));
  }, [dispatch, getManagersFetch]);

  useEffect(() => {
    getManagers();
  }, [getManagers]);

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Something went wrong.',
        status: 'error',
        isClosable: true,
      });
    }
  }, [isError, toast]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'The department was added succesfully.',
        status: 'success',
        isClosable: true,
      });
    }
  }, [isSuccess, toast]);
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
              isLoading={isLoading}
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
              <option value='FrontEnd'>FrontEnd</option>
              <option value='BackEnd'>BackEnd</option>
              <option value='UI/UX'>UI/UX</option>
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
              <option value='13'>Motco Adriana</option>
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
        <Table columns={columns} data={data} />
      </Flex>
    </Container>
  );
};
export default AddDepartment;
