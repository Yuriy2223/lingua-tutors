import React, { useState } from 'react';
import { ModalContext, ModalType } from '../components/Common/ModalContext';
import { ModalLogin } from '../components/Modals/ModalLogin';
import { ModalRegister } from '../components/Modals/ModalRegistration';
import { ModalLogout } from '../components/Modals/ModalLogout';
import { ModalBooking } from '../components/Modals/ModalBooking';

interface ModalProps {
  avatar_url?: string;
  name?: string;
  surname?: string;
  id?: string;
}

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (type: ModalType, props?: ModalProps) => {
    setModalType(type);
    setModalProps(props || null);
  };

  const closeModal = () => {
    setModalType(null);
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
      {modalType === 'login' && <ModalLogin onClose={closeModal} />}
      {modalType === 'register' && <ModalRegister onClose={closeModal} />}
      {modalType === 'logout' && (
        <ModalLogout
          onClose={closeModal}
          onLogout={() => {
            // логіку виходу
            closeModal();
          }}
        />
      )}
      {modalType === 'bookTrialLesson' && modalProps && (
        <ModalBooking
          onClose={closeModal}
          teacher={{
            avatar_url: modalProps.avatar_url || '',
            name: modalProps.name || '',
            surname: modalProps.surname || '',
          }}
        />
      )}
    </ModalContext.Provider>
  );
};
