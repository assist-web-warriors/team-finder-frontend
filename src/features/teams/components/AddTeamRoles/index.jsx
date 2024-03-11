import { Button, Flex, Heading, Input, Textarea } from '@chakra-ui/react';
import Container from './index.styled';

const AddTeamRoles = () => {
  return (
    <Container>
      <Flex direction={'column'} gap={'45px'} width={'100%'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Heading fontSize={'24px'}>Team roles</Heading>
          <Button bgColor={'#fff'} border={'1px solid #D0D5DD'} color={'#D0D5DD'}>
            Save
          </Button>
        </Flex>
        <Flex direction={'column'} gap={'24px'} width={'40%'}>
          <Input placeholder='Enter New Team Role'></Input>
          <Textarea placeholder='Enter role description'></Textarea>
        </Flex>
      </Flex>
    </Container>
  );
};
export default AddTeamRoles;
