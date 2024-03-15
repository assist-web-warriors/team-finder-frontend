import { Button, Flex } from '@chakra-ui/react';
import Container from './index.styled';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const Pagination = () => {
  return (
    <Container>
      <Flex gap={'10px'}>
        <Button variant={'outline'}>
          <ArrowLeftIcon color={'#D0D5DD'} />
        </Button>
        <Button bgColor={'#0356E8'} color={'#fff'}>
          1
        </Button>
        <Button variant={'outline'}>
          <ArrowRightIcon color={'#D0D5DD'} />
        </Button>
      </Flex>
    </Container>
  );
};
export default Pagination;
