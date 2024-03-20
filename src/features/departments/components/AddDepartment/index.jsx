import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
} from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartmentItem, useAddDepartmentMutation } from 'src/entities/department';
import { useAddColumns } from '../../hooks';
import { useEffect } from 'react';
import { setManagersItems } from 'src/entities/user/model/user-slice';
import { useGetManagersQuery } from 'src/entities/user/api/user-api';
import { Link, useNavigate } from 'react-router-dom';
import CONSTANTS from 'src/common/constants';

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
  const managers = useSelector((store) => store.user.managers);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm();

  const { data: fetchedManagers, refetch } = useGetManagersQuery();

  const [addDepartmentFetch, { isLoading, isSuccess, isError, error }] = useAddDepartmentMutation();

  const onSubmit = async (data) => {
    const result = await addDepartmentFetch({
      department: data.name,
      manager: data.manager,
    }).unwrap();
    dispatch(
      addDepartmentItem({
        id: result.id,
        name: result.name,
        manager: result.manager,
        members: null,
        projects: null,
        skills: null,
      }),
    );
    navigate(CONSTANTS.PAGES.DEPARTMENTS);
  };

  useEffect(() => {
    refetch();
    if (fetchedManagers) {
      dispatch(setManagersItems(fetchedManagers));
    }
  }, [dispatch, refetch, fetchedManagers]);

  useEffect(() => {
    if (isError) {
      if (error.status === 400) {
        toast({
          title: 'The manager is already assigned to one department.',
          status: 'error',
          isClosable: true,
        });
      } else {
        toast({
          title: "The department can't be added. Try again later.",
          status: 'error',
          isClosable: true,
        });
      }
    }
  }, [isError, error, toast]);

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
          <Flex alignItems={'center'} gap={'10px'}>
            <Link to={CONSTANTS.PAGES.DEPARTMENTS}>
              <Button
                leftIcon={<ArrowBackIcon />}
                size={'xs'}
                variant={'ghost'}
                css={{ '& > span': { margin: 0 }, svg: { width: '24px', height: '24px' } }}
              />
            </Link>
            <Heading fontSize={'2xl'} lineHeight={0}>
              Add new department
            </Heading>
          </Flex>
          <Flex gap={'20px'}>
            <Button
              variant={'outline'}
              isDisabled={Object.values(touchedFields).length === 0 || isLoading}
              onClick={() => reset()}>
              Cancel
            </Button>
            <Button
              isLoading={isLoading}
              isDisabled={Object.values(touchedFields).length === 0}
              form='department_form'
              type={'submit'}>
              Save
            </Button>
          </Flex>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)} id='department_form'>
          <FormControl isInvalid={errors.name}>
            <FormLabel>Department Name</FormLabel>
            <Input
              id='name'
              {...register('name', { required: true })}
              name='name'
              placeholder='Please enter a name'
              cursor={'pointer'}
              bgColor={'white'}
              width={'100%'}
              border={'2px solid #D0D5DD'}
            />
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
              {managers.length
                ? managers.map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.name}
                    </option>
                  ))
                : null}
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
