import Container from './index.styled';
import { Flex, Heading, Text, Input, Avatar } from '@chakra-ui/react';
import { TableComponent } from 'src/common';

const ViewProfile = () => {
  return (
    <Container>
      <Flex justifyContent={'center'}>
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' size={'xl'}></Avatar>
      </Flex>
      <Flex gap={'25px'} width={'100%'}>
        <Flex direction={'column'} gap={'24px'} width={'50%'}>
          <Flex direction={'column'}>
            <Text>Full Name</Text>
            <Input placeholder='Munteanu Sebastian'></Input>
          </Flex>
          <Flex direction={'column'}>
            <Text>Phone Number</Text>
            <Input placeholder='0732678908'></Input>
          </Flex>
          <Flex direction={'column'}>
            <Text>Position</Text>
            <Input placeholder='Backend + Frontend Developer'></Input>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={'24px'} width={'50%'}>
          <Flex direction={'column'}>
            <Text>Email</Text>
            <Input placeholder='murariusebatian@yahoo.com'></Input>
          </Flex>
          <Flex direction={'column'}>
            <Text>Adress</Text>
            <Input placeholder='Str. Visinilor, Suceava '></Input>
          </Flex>
          <Flex direction={'column'}>
            <Text>Organization</Text>
            <Input placeholder='X'></Input>
          </Flex>
        </Flex>
      </Flex>
      <Heading fontSize={'24px'}>Skills</Heading>
      <TableComponent />
    </Container>
  );
};
export default ViewProfile;
