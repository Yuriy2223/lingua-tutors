import React from 'react';
import styled from 'styled-components';
import { Button } from '../Common/Button';
import { Iconsvg } from '../Common/Icons';
import { useModal } from '../Common/ModalContext';
import { useAuth } from '../../services/authContext';

const AuthButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  padding: 4px 0;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
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
  const { user } = useAuth();
  const { openModal } = useModal();

  return (
    <AuthButtonContainer>
      {user ? (
        <StyledAuthButton onClick={() => openModal('logout')}>
          <StyledIcon width={20} height={20} iconName="login" />
          Logout
        </StyledAuthButton>
      ) : (
        <StyledAuthButton onClick={() => openModal('login')}>
          <StyledIcon width={20} height={20} iconName="login" />
          Log in
        </StyledAuthButton>
      )}
      {!user && (
        <StyledAuthButton onClick={() => openModal('register')}>
          Registration
        </StyledAuthButton>
      )}
    </AuthButtonContainer>
  );
};
