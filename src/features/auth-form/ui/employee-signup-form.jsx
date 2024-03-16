import { Link } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import { FormInput, PasswordInput, FormTitle } from '../components';
import { useFormValidation, signupSchema } from '../lib';
import { FormContainer, Paragraph, AuthContainer } from './index.styled';

const EmployeeSignUpForm = () => {
  const { handleSubmit, register, errors } = useFormValidation(signupSchema);

  const onSubmit = (values) => '';

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormTitle title='Hello' subtitle='To sign up, please fill the fields below.' />
          <FormInput
            label='Name'
            placeholder='Enter your name'
            errors={errors}
            id='name'
            {...register('name')}
          />
          <FormInput
            label='Email'
            placeholder='Enter your email'
            errors={errors}
            id='email'
            {...register('email')}
          />
          <PasswordInput
            label='Password'
            placeholder='******'
            errors={errors}
            id='password'
            {...register('password')}
          />
          <Button h='48px' mb='16px' colorScheme='blue' type='submit'>
            Sign up
          </Button>
          <Paragraph>
            <Text>Already have an account ?</Text>
            <Link to='/auth/login'>
              <Text color='blue'>Log In</Text>
            </Link>
          </Paragraph>
        </FormContainer>
      </form>
    </AuthContainer>
  );
};

export default EmployeeSignUpForm;
