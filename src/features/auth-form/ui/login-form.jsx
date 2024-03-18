import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'src/entities/user/api/user-api';
import { setUserData } from 'src/entities/user';
import { Button, Text, useToast } from '@chakra-ui/react';
import { FormInput, PasswordInput, FormTitle, LoginOptions } from '../components';
import { FormContainer, Paragraph, AuthContainer } from './index.styled';
import { useFormValidation, loginSchema } from '../lib';
import CONSTANTS from 'src/common/constants';

const LoginForm = () => {
  const { handleSubmit, register, errors } = useFormValidation(loginSchema);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const [loginUser, { error: loginError, isLoading }] = useLoginMutation();

  const onSubmit = async ({ email, password }) => {
    const request = { email, password };
    const { token, user } = await loginUser(request).unwrap();

    if (token) {
      dispatch(setUserData({ token, roles: user.roles, name: user.name, email: user.email }));
      navigate(CONSTANTS.PAGES.PERSONAL);
    }
  };

  useEffect(() => {
    if (loginError) {
      toast({
        title: `${loginError.data.message}`,
        status: 'error',
        isClosable: true,
      });
    }
  }, [loginError, toast]);

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
          <Button h='48px' mb='16px' colorScheme='blue' type='submit' isLoading={isLoading}>
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
