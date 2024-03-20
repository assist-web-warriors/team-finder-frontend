import { Link } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import { PasswordInput, FormTitle } from '../components';
import { FormContainer, Paragraph, AuthContainer } from './index.styled';
import { useFormValidation, resetPasswordSchema } from '../lib';
import CONSTANTS from 'src/common/constants';

const ResetPaswordForm = () => {
  const { handleSubmit, register, errors } = useFormValidation(resetPasswordSchema);

  const onSubmit = (values) => {};

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormTitle
            title='Reset password'
            subtitle='Enter a new password below to change your password.'
          />
          <PasswordInput
            label='New password'
            placeholder='*******'
            errors={errors}
            id='password'
            {...register('password')}
          />
          <PasswordInput
            label='Confirm password'
            placeholder='*******'
            errors={errors}
            id='conf_password'
            {...register('conf_password')}
          />
          <Button h='48px' mb='16px' colorScheme='blue' type='submit'>
            Log in
          </Button>
          <Paragraph>
            <Text>Don't have an account ?</Text>
            <Text color='blue'>
              <Link to={CONSTANTS.PAGES.SIGN_UP} cursor='pointer'>
                Sign Up
              </Link>
            </Text>
          </Paragraph>
        </FormContainer>
      </form>
    </AuthContainer>
  );
};

export default ResetPaswordForm;
