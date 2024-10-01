import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('This field is required'),
  password: yup
    .string()
    .min(6, 'The password must contain at least 6 characters')
    .required('This field is required'),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'The name must contain at least 3 characters')
    .required('This field is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('This field is required'),
  password: yup
    .string()
    .min(6, 'The password must contain at least 6 characters')
    .required('This field is required'),
});

export const BookingSchema = yup.object({
  full_name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Full name is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone_number: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Enter a valid phone number')
    .required('Phone number is required'),
  reason: yup
    .string()
    .oneOf(
      ['Career and business', 'Lesson for kids', 'Living abroad', 'Exams and coursework', 'Culture, travel or hobby'],
      'Please select a valid reason'
    )
    .required('Please select a reason'),
});