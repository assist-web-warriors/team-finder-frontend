import { Text } from '@chakra-ui/react';
import { DateContainer } from './index.styled';

const CustomDate = ({ dueDate }) => {
  return (
    <DateContainer>
      <Text fontWeight='600' fontSize='15px'>
        {dueDate}
      </Text>
      <Text color='gray' fontSize='15px'>
        Due Date
      </Text>
    </DateContainer>
  );
};

export default CustomDate;
