import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <Container>
      <Flex width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading fontSize={'24px'}>Team roles</Heading>
        <Link to={'/add-team-role'}>
          <Button bgColor={'#0356E8'} color={'#fff'} gap={'10px'}>
            <AddIcon />
            Add Team Role
          </Button>
        </Link>
      </Flex>
      <Table />
    </Container>
  );
};
export default Team;
