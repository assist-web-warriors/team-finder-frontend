import { Button, Flex } from '@chakra-ui/react';
import Container from './index.styled';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const startPage = currentPage === 0 ? currentPage : currentPage - 1;
    const buttons = [];
    for (let i = startPage; i <= currentPage + 1 && i < totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'solid' : 'outline'}
          onClick={() => onPageChange(i)}>
          {i + 1}
        </Button>,
      );
    }
    return buttons;
  };

  return (
    <Container>
      <Flex gap={'10px'}>
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 0}
          transition={'0.1s all ease-in-out'}
          variant={'outline'}>
          <ChevronLeftIcon color={'gray'} transition={'0.1s all ease-in-out'} />
        </Button>
        {renderPageButtons()}
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages - 1}
          transition={'0.1s all ease-in-out'}
          variant={'outline'}>
          <ChevronRightIcon transition={'0.1s all ease-in-out'} color={'gray'} />
        </Button>
      </Flex>
    </Container>
  );
};
export default Pagination;
