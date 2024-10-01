import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginSchema } from '../Common/validationSchemas';
import { ModalUniversal } from '../Common/ModalUniversal';
import {
  ModalForm,
  ModalTitle,
  ModalText,
  ModalInputEmail,
  ModalInputPassword,
  ModalButton,
  ErrorMessage,
  ModalLi,
  ModalUl,
  ModalPasswordButton,
} from './Modal.styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface ModalLoginProps {
  onClose: () => void;
}

interface LoginFormData {
  email: string;
  password: string;
}

export const ModalLogin: React.FC<ModalLoginProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    clearErrors,
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        reset();
        toast.success('Login successful!');
        onClose();
      } catch (error) {
        toast.error('Login failed. Please try again.');
        console.error('Login error:', error);
      }
    },
    [onClose, reset]
  );

  const handleBlur = (fieldName: keyof LoginFormData) => {
    trigger(fieldName);
  };

  const handleFocus = (fieldName: keyof LoginFormData) => {
    clearErrors(fieldName);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <>
      <ModalUniversal onClose={onClose}>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle>Log In</ModalTitle>
          <ModalText>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </ModalText>
          <ModalUl>
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
          <ModalButton type="submit">Log In</ModalButton>
        </ModalForm>
      </ModalUniversal>
      <ToastContainer />
    </>
  );
};
