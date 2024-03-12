import { Text } from '@chakra-ui/react';
import { DateContainer } from './index.styled';

const CustomDate = ({ dueDate }) => {
  return (
    <DateContainer>
      <Text fontWeight='600' fontSize='12px'>
        {dueDate}
      </Text>
      <Text color='gray' fontSize='12px'>
        Due Date
      </Text>
    </DateContainer>
  );
};

export default CustomDate;
