import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { AddIcon } from '@chakra-ui/icons';
import { TableComponent } from 'src/common';
import { useState } from 'react';

const Team = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
      <TableComponent />
    </Container>
  );
};
export default Team;
