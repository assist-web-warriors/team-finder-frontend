import { Text } from '@chakra-ui/react';
import { DateContainer } from './index.styled';

const CustomDate = ({ date, description, border }) => {
  return (
    <DateContainer style={{ border: border ? border : '1px solid var(--grey-200, #e2e8f0)' }}>
      <Text fontWeight='600' fontSize='12px'>
        {date}
      </Text>
      <Text color='gray' fontSize='12px'>
        {description}
      </Text>
    </DateContainer>
  );
};

export default CustomDate;
