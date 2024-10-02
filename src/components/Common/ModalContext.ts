import { createContext, useContext } from 'react';

export type ModalType =
  | 'login'
  | 'register'
  | 'logout'
  | 'bookTrialLesson'
  | null;

interface ModalProps {
  avatar_url?: string;
  name?: string;
  surname?: string;
  id?: string;
}
// Інтерфейс контексту
export interface ModalContextType {
  modalType: ModalType;
  modalProps?: ModalProps;
  openModal: (type: ModalType, props?: ModalProps) => void;
  closeModal: () => void;
}
// Створення контексту
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
// Хук для доступу до контексту
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
