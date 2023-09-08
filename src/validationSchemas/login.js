import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, 'to short!')
    .max(24)
    .required('Password is required'),
});
