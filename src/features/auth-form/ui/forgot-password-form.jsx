import { Link, useNavigate } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import { FormInput, FormTitle } from '../components';
import { FormContainer, Paragraph, AuthContainer } from './index.styled';
import { useFormValidation, forgotPasswordSchema } from '../lib';

const ForgotPasswordForm = () => {
  const { handleSubmit, register, errors } = useFormValidation(forgotPasswordSchema);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    navigate('/auth/reset-password');
  };

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormTitle
            title='Forgot password?'
            subtitle='Enter your email below to reset your password.'
          />
          <FormInput
            label='Email'
            placeholder='Enter your email'
            errors={errors}
            id='email'
            {...register('email')}
          />
          <Text fontSize='14px' color='gray'>
            Please follow the instructions received in the email!
          </Text>
          <Paragraph>
            <Text color='blue' w='100%' display='flex' justifyContent='flex-end' mb='20px'>
              <Link to='/auth/login' cursor='pointer'>
                I remembered my password!
              </Link>
            </Text>
          </Paragraph>
          <Button h='48px' mb='16px' colorScheme='blue' type='submit'>
            Send Link
          </Button>
        </FormContainer>
      </form>
    </AuthContainer>
  );
};

export default ForgotPasswordForm;
