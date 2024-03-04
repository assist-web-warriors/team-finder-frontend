import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';
import { FormInput } from './ui/form-input';
import { FormContainer } from './index.styled';

export const AuthForm = () => {
  return (
    <FormControl isRequired>
      <FormContainer>
        <FormInput />
        <FormInput />
      </FormContainer>
    </FormControl>
  );
};
