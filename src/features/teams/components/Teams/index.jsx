import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';

const Team = () => {
  const handleClick = () => {
    window.location.href = '/add-team-role';
  };
  return (
    <Container>
      <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontSize={'24px'}>Team roles</Heading>
        <Button bgColor={'#0356E8'} color={'#fff'} gap={'10px'} onClick={handleClick}>
          <AddIcon />
          Add Team Role
        </Button>
      </Flex>
      <Table />
    </Container>
  );
};
export default Team;
