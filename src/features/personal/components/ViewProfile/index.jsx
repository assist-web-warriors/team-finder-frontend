import { Table } from 'src/common';
import Container from './index.styled';
import { Flex, Heading, Input, Avatar, FormControl, FormLabel } from '@chakra-ui/react';
import CONSTANTS from '../../constants';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const data = [
  {
    skill: 'C++',
    endorsments: 'IT  Certification',
    level: 'segunadebayo@yahoo.com',
    experience: ' 6-12 months',
    more: '',
  },
  {
    skill: 'JavaScript',
    endorsments: 'IT  Certification',
    level: 'segunadebayo@yahoo.com',
    experience: ' 6-12 months',
    more: '',
  },
];
const ViewProfile = () => {
  const user = useSelector((store) => store.user);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.session.name,
      email: user.session.email,
    },
  });

  const onSubmit = (data) => {
    // TODO: Update user
    console.log(data);
  };

  return (
    <Container>
      <Flex justifyContent={'center'}>
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' size={'xl'}></Avatar>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)} id='personal_form'>
        <Flex gap={'25px'} flexDirection={'column'} width={'100%'}>
          <FormControl display={'flex'} gap={'24px'} width={'100%'}>
            <Flex direction={'column'} width={'50%'}>
              <FormLabel>Full Name</FormLabel>
              <Input
                id='name'
                {...register('name', { required: true })}
                name='name'
                placeholder='Munteanu Sebastian'></Input>
            </Flex>
            <Flex direction={'column'} width={'50%'}>
              <FormLabel>Position</FormLabel>
              <Input placeholder='Backend + Frontend Developer'></Input>
            </Flex>
          </FormControl>
          <FormControl display={'flex'} gap={'24px'} width={'100%'}>
            <Flex direction={'column'} width={'50%'}>
              <FormLabel> Email</FormLabel>
              <Input
                id='name'
                {...register('email', { required: true })}
                name='email'
                placeholder='murariusebatian@yahoo.com'></Input>
            </Flex>
            <Flex direction={'column'} width={'50%'}>
              <FormLabel>Organization</FormLabel>
              <Input placeholder='X'></Input>
            </Flex>
          </FormControl>
        </Flex>
      </form>
      <Heading fontSize={'24px'}>Skills</Heading>
      <Table columns={CONSTANTS.TABLE.SKILL} data={data} />
    </Container>
  );
};
export default ViewProfile;
