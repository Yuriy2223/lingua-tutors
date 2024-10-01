import React, { useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalUniversal } from '../Common/ModalUniversal';
import {
  ModalButton,
  ModalFormLogaut,
  ModalText,
  ModalTitle,
} from './Modal.styles';

import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';

interface ModalLogoutProps {
  onClose: () => void;
  onLogout: () => void;
}

export const ModalLogout: React.FC<ModalLogoutProps> = ({ onClose }) => {
  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
      toast.success('Logout successful!');
      onClose();
    } catch (error) {
      toast.error('Logout failed. Please try again.');
      console.error('Logout error:', error);
    }
  }, [onClose]);

  return (
    <>
      <ModalUniversal onClose={onClose}>
        <ModalFormLogaut>
          <ModalTitle>Log Out</ModalTitle>
          <ModalText>Are you sure you want to log out?</ModalText>
          <ModalButton type="button" onClick={handleLogout}>
            Yes, Log Out
          </ModalButton>
        </ModalFormLogaut>
      </ModalUniversal>
      <ToastContainer />
    </>
  );
};
