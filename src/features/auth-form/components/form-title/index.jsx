import { HeaderContainer } from './index.styled';
import { Text } from '@chakra-ui/react';

const FormTitle = ({ title, subtitle }) => {
  return (
    <HeaderContainer>
      <Text fontSize='28px' fontWeight='700'>
        {title}
      </Text>
      <Text fontSize='16px' fontWeight='600' color='gray'>
        {subtitle}
      </Text>
    </HeaderContainer>
  );
};

export default FormTitle;
