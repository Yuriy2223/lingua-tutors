import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalUniversal } from '../Common/ModalUniversal';
import {
  ModalButton,
  ModalTitle,
  ModalText,
  ModalForm,
  BookingTeacherWrapper,
  BookingAvatar,
  BookingTeacherLabel,
  BookingTeacherName,
  AnswerList,
  Answerlabel,
  AnswerInput,
  AnswerWrapper,
  AnswerText,
  ModalInputName,
  ErrorMessage,
  ModalInputEmail,
  ModalInputPhone,
  ModalLi,
  ModalUl,
  ErrorMessageAnswer,
} from './Modal.styles';
import { BookingSchema } from '../Common/validationSchemas';

interface ModalBookingProps {
  onClose: () => void;
  teacher: {
    avatar_url: string;
    name: string;
    surname: string;
  };
}
interface BookingFormData {
  full_name: string;
  email: string;
  phone_number: string;
  reason:
    | 'Career and business'
    | 'Lesson for kids'
    | 'Living abroad'
    | 'Exams and coursework'
    | 'Culture, travel or hobby';
}

export const ModalBooking: React.FC<ModalBookingProps> = ({
  onClose,
  teacher,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    clearErrors,
    reset,
  } = useForm<BookingFormData>({
    resolver: yupResolver(BookingSchema),
  });

  const onSubmit = useCallback(
    async (data: BookingFormData) => {
      try {
        console.log('Form Data:', data);
        reset();
        toast.success(
          <div>
            Your request has been successfully submitted! The teacher{' '}
            <span style={{ color: 'red' }}>
              {teacher.name} {teacher.surname}
            </span>{' '}
            will contact you soon.
          </div>
        );
        onClose();
      } catch (error) {
        toast.error('Booking failed. Please try again.');
        console.error('Booking error:', error);
      }
    },
    [onClose, reset, teacher.name, teacher.surname]
  );

  const handleBlur = (fieldName: keyof BookingFormData) => {
    trigger(fieldName);
  };

  const handleFocus = (fieldName: keyof BookingFormData) => {
    clearErrors(fieldName);
  };

  return (
    <>
      <ModalUniversal onClose={onClose}>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle>Book trial lesson</ModalTitle>
          <ModalText>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </ModalText>

          <BookingTeacherWrapper>
            <BookingAvatar src={teacher.avatar_url} alt="Teacher" />
            <div>
              <BookingTeacherLabel>Your teacher</BookingTeacherLabel>
              <BookingTeacherName>
                {teacher.name} {teacher.surname}
              </BookingTeacherName>
            </div>
          </BookingTeacherWrapper>

          <AnswerWrapper>
            <AnswerText>
              What is your main reason for learning English?
            </AnswerText>
            <AnswerList>
              {[
                'Career and business',
                'Lesson for kids',
                'Living abroad',
                'Exams and coursework',
                'Culture, travel or hobby',
              ].map(reason => (
                <li key={reason}>
                  <Answerlabel htmlFor={reason}>
                    <AnswerInput
                      type="radio"
                      id={reason}
                      value={reason}
                      {...register('reason')}
                    />
                    <span>{reason}</span>
                  </Answerlabel>
                </li>
              ))}
            </AnswerList>
            {errors.reason && (
              <ErrorMessageAnswer>{errors.reason.message}</ErrorMessageAnswer>
            )}
          </AnswerWrapper>

          <ModalUl>
            <ModalLi>
              <ModalInputName
                type="text"
                placeholder="Full Name"
                {...register('full_name')}
                onBlur={() => handleBlur('full_name')}
                onFocus={() => handleFocus('full_name')}
              />
              {errors.full_name && (
                <ErrorMessage>{errors.full_name.message}</ErrorMessage>
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
              <ModalInputPhone
                type="text"
                placeholder="Phone number"
                {...register('phone_number')}
                onBlur={() => handleBlur('phone_number')}
                onFocus={() => handleFocus('phone_number')}
              />
              {errors.phone_number && (
                <ErrorMessage>{errors.phone_number.message}</ErrorMessage>
              )}
            </ModalLi>
          </ModalUl>

          <ModalButton type="submit">Book</ModalButton>
        </ModalForm>
      </ModalUniversal>
    </>
  );
};
