import { Link } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import { FormInput, PasswordInput, FormTitle, LoginOptions } from '../components';
import { FormContainer, Paragraph, AuthContainer } from './index.styled';
import { useFormValidation, loginSchema } from '../lib';

const LoginForm = () => {
  const { handleSubmit, register, errors } = useFormValidation(loginSchema);

  const onSubmit = (values) => console.log(values);

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormTitle title='Welcome' subtitle='Enter your account details below.' />
          <FormInput
            label='Email'
            placeholder='Enter your email'
            errors={errors}
            id='email'
            {...register('email')}
          />
          <PasswordInput
            label='Password'
            placeholder='*******'
            errors={errors}
            id='password'
            {...register('password')}
          />
          <LoginOptions label='Remember me' {...register('remember_me')} />
          <Button h='48px' mb='16px' colorScheme='blue' type='submit'>
            Log in
          </Button>
          <Paragraph>
            <Text>Don't have an account ?</Text>
            <Text color='blue'>
              <Link to='/auth/signup' cursor='pointer'>
                Sign Up
              </Link>
            </Text>
          </Paragraph>
        </FormContainer>
      </form>
    </AuthContainer>
  );
};

export default LoginForm;
