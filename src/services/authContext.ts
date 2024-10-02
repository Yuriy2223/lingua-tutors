import { createContext, useContext } from 'react';
import { User } from 'firebase/auth';

// Інтерфейс для контексту аутентифікації
export interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>; 
}

// Створення контексту для аутентифікації
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

// Хук для доступу до контексту
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
