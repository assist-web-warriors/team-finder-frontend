import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Text } from '@chakra-ui/react';
import { Options, RememberMe } from './index.styled';

const LoginOptions = forwardRef(({ label, ...props }, ref) => {
  return (
    <Options>
      <RememberMe>
        <Checkbox id='check' {...props} ref={ref} />
        <label htmlFor='check'>
          <Text cursor='pointer' ml='4px'>
            {label}
          </Text>
        </label>
      </RememberMe>
      <Text color='blue'>
        <Link to='/auth/forgot-password'>Forgot password ?</Link>
      </Text>
    </Options>
  );
});

export default LoginOptions;
