import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Iconsvg } from './Icons';
import { ToastContainer } from 'react-toastify';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ModalContainer = styled.div`
  position: relative;
  border-radius: 15px;
  width: 90%;
  max-width: 566px;
  max-height: 95vh;
  background: var(--white-color);
  padding: 32px;
  overflow-y: auto;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const ButtonClose = styled.button`
  padding: 6px;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: transparent;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;
const StyledIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
`;
interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalUniversal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      <ModalBackdrop onClick={onClose}>
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ButtonClose onClick={onClose}>
            <StyledIcon width={32} height={32} iconName="close" />
          </ButtonClose>
          {children}
        </ModalContainer>
      </ModalBackdrop>
      <ToastContainer />
    </>
  );
};
