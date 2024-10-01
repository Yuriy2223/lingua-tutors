import styled from 'styled-components';

export const ModalForm = styled.form`
  padding: 12px 0 32px;
  width: 438px;
  margin: 0 auto;
`;
export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--primary);
  margin-bottom: 20px;
`;
export const ModalText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  color: ${({ theme }) => theme.primaryBlack};
  margin-bottom: 40px;
`;
export const ModalInputName = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
  transition: all 300ms ease-in-out;
  color: ${({ theme }) => theme.primaryBlack};

  &:focus {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const ModalInputEmail = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
  color: ${({ theme }) => theme.primaryBlack};
  transition: all 300ms ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const ModalButton = styled.button`
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 60px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.primaryColorLight};
  border: none;
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const ModalUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 40px;
`;
export const ModalLi = styled.li`
  position: relative;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -15px;
  left: 10px;
`;
export const ModalPasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  font-size: 20px; //  розмір іконки
  color: ${({ theme }) => theme.primaryOpacity};
`;
export const ModalInputPassword = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
  color: ${({ theme }) => theme.primaryBlack};
  transition: all 300ms ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const ModalFormLogaut = styled.div`
  padding: 12px 0 32px;
  width: 438px;
  margin: 0 auto;
`;
export const BookingTeacherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 40px;
`;
export const BookingAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export const BookingTeacherLabel = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #8a8a89;
  margin-bottom: 4px;
`;
export const BookingTeacherName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.primaryBlack};
`;
export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
  padding-bottom: 40px;
  position: relative;
`;
export const AnswerText = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  color: #121417;
`;
export const AnswerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const AnswerInput = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #c0c0be;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &:checked {
    border-color: ${({ theme }) => theme.primaryColorDark};
    background-color: ${({ theme }) => theme.white};
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryColorDark};
    transform: translate(-50%, -50%);
  }

  &:hover::after {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const Answerlabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;

  &:hover ${AnswerInput} {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }

  span {
    font-weight: 500;
    font-size: 16px;
    background-color: transparent;
    cursor: pointer;
    transition: all 300ms ease;
    padding-left: 8px;
  }
`;
export const ModalInputPhone = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
  color: ${({ theme }) => theme.primaryBlack};
  transition: all 300ms ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primaryColorDark};
  }
`;
export const ErrorMessageAnswer = styled.div`
  color: red;
  font-size: 16px;
  position: absolute;
  bottom: 15px;
  left: 10px;
`;
