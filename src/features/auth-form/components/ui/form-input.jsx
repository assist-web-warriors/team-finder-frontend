import { FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';

export const FormInput = () => {
  return (
    <div>
      <FormLabel>First name</FormLabel>
      <Input placeholder='First name' />
    </div>
  );
};
