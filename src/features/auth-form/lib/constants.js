import * as yup from 'yup';

export const iconColor = 'gray.500';
export const charsMaxLength = 46;

export const loginSchema = yup.object({
  email: yup.string().email().max(45).required('email is required field'),
  password: yup.string().min(6).max(45).required('password is required field'),
  remember_me: yup.boolean().optional(),
});

export const signupSchema = yup.object({
  name: yup.string().max(45).required('name is required field'),
  email: yup.string().email().max(45).required('email is required field'),
  password: yup.string().min(6).max(45).required('password is required field'),
});

export const signupAdminSchema = yup.object({
  organization_name: yup.string().max(45).required('organization name is required field'),
  headquarter_address: yup.string().max(45).optional(),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().email().max(45).required('email is required field'),
});

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(6).max(45).required('password is required'),
  conf_password: yup.string().oneOf([yup.ref('password'), null], 'passwords must match'),
});
