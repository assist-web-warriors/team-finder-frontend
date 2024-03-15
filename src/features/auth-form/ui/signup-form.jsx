import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSignupMutation } from 'src/entities/user/api/user-api';
import { setUserData } from 'src/entities/user';
import { Button, Text, Select, useToast } from '@chakra-ui/react';
import { FormInput, PasswordInput, OrganizationOptions, FormTitle } from '../components';
import { useFormValidation, signupSchema, signupAdminSchema } from '../lib';
import { FormContainer, Paragraph, FormHeader, AuthContainer } from './index.styled';

const SignupForm = () => {
  const [selected, setSelected] = useState('employee');
  const selectedSchema =
    selected === 'employee' ? signupSchema : signupSchema.concat(signupAdminSchema);
  const { handleSubmit, register, errors } = useFormValidation(selectedSchema);

  // TODO: refactor auth for org admin

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const [registerUser, { error: signupError, isLoading }] = useSignupMutation();

  const onSubmit = async ({ name, email, password }) => {
    const request = { name, email, password };
    const token = await registerUser(request).unwrap();

    if (token) {
      dispatch(setUserData({ token }));
      navigate('/');
    }
  };

  useEffect(() => {
    if (signupError) {
      toast({
        title: `${signupError.data.message}`,
        status: 'error',
        isClosable: true,
      });
    }
  }, [signupError, toast]);

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormTitle title='Hello' subtitle='To sign up, please fill the fields below.' />
          <FormHeader>
            <Select
              w='170px'
              h='32px'
              value={selected}
              {...register('role')}
              onChange={(e) => {
                setSelected(e.target.value);
                register('role').onChange(e);
              }}>
              <option value='admin'>Admin User</option>
              <option value='employee'>Basic User</option>
            </Select>
          </FormHeader>
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
          {selected === 'admin' && <OrganizationOptions register={register} errors={errors} />}
          <Button h='48px' mb='16px' colorScheme='blue' type='submit' isLoading={isLoading}>
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

export default SignupForm;
