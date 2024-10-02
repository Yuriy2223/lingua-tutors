import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerSchema } from '../Common/validationSchemas';
import { ModalUniversal } from '../Common/ModalUniversal';
import {
  ModalForm,
  ModalTitle,
  ModalText,
  ModalInputName,
  ModalInputEmail,
  ModalInputPassword,
  ModalButton,
  ErrorMessage,
  ModalLi,
  ModalUl,
  ModalPasswordButton,
} from './Modal.styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FirebaseError } from 'firebase/app';
import { useAuth } from '../../services/authContext';

interface ModalRegisterProps {
  onClose: () => void;
}
interface FormData {
  name: string;
  email: string;
  password: string;
}

export const ModalRegister: React.FC<ModalRegisterProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register: registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    clearErrors,
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        await registerUser(data.email, data.password);
        reset();
        toast.success('Registration successful!');
        setTimeout(() => {
          onClose();
        }, 2000);
      } catch (error) {
        const firebaseError = error as FirebaseError;
        if (firebaseError.code === 'auth/email-already-in-use') {
          toast.error('This email is already in use.');
        } else {
          toast.error('Registration failed. Please try again.');
        }
        console.error('Registration error:', firebaseError);
      }
    },
    [onClose, reset, registerUser]
  );

  const handleBlur = (fieldName: keyof FormData) => {
    trigger(fieldName);
  };
  const handleFocus = (fieldName: keyof FormData) => {
    clearErrors(fieldName);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
      <ModalUniversal onClose={onClose}>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle>Registration</ModalTitle>
          <ModalText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </ModalText>
          <ModalUl>
            <ModalLi>
              <ModalInputName
                type="text"
                placeholder="Name"
                {...register('name')}
                onBlur={() => handleBlur('name')}
                onFocus={() => handleFocus('name')}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </ModalLi>
            <ModalLi>
              <ModalInputEmail
                type="email"
                placeholder="Email"
                {...register('email')}
                onBlur={() => handleBlur('email')}
                onFocus={() => handleFocus('email')}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </ModalLi>
            <ModalLi>
              <ModalInputPassword
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password')}
                onBlur={() => handleBlur('password')}
                onFocus={() => handleFocus('password')}
              />
              <ModalPasswordButton
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </ModalPasswordButton>
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </ModalLi>
          </ModalUl>
          <ModalButton type="submit">Sign Up</ModalButton>
        </ModalForm>
      </ModalUniversal>
    </>
  );
};
