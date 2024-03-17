import { Button, Flex, Heading } from '@chakra-ui/react';
import Container from './index.styled';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Flex>
        <Heading>Bine ai venit pe TEAM FINDER APP</Heading>
        <Link>
          <Button>Creare cont</Button>
        </Link>
        <Link>
          <Button>Logare</Button>
        </Link>
      </Flex>
    </Container>
  );
};
export default Home;
