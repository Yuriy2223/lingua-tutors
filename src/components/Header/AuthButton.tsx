import React from 'react';
import styled from 'styled-components';
import { Button } from '../Common/Button';
import { Iconsvg } from '../Common/Icons';
import { useModal } from '../Common/ModalContext';

const AuthButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledAuthButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primaryColorLight};
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.primaryBlack};
  }
`;

const StyledIcon = styled(Iconsvg)`
  width: 20px;
  height: 20px;
`;

export const AuthButton: React.FC = () => {
  const { openModal } = useModal();

  return (
    <AuthButtonContainer>
      <StyledAuthButton onClick={() => openModal('login')}>
        <StyledIcon width={20} height={20} iconName="login" />
        Log in
      </StyledAuthButton>
      <StyledAuthButton onClick={() => openModal('register')}>
        Registration
      </StyledAuthButton>
      <StyledAuthButton onClick={() => openModal('logout')}>
        Logout
      </StyledAuthButton>
    </AuthButtonContainer>
  );
};
