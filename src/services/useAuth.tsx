import React, { useState, useEffect, ReactNode } from 'react';
import { auth } from './firebase';
import {
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { AuthContext, AuthContextProps } from './authContext';

// Інтерфейс для пропсів провайдера аутентифікації
interface AuthProviderProps {
  children: ReactNode;
}

// Провайдер для обгортання компонентів
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Відстежуємо стан аутентифікації користувача
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Функція для входу
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Функція для виходу
  const logout = async () => {
    await signOut(auth);
  };

  // Функція для реєстрації
  const register = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // Значення, яке передаємо через контекст
  const value: AuthContextProps = {
    user,
    login,
    logout,
    register,
  };

  // Рендеримо провайдер контексту з переданими значеннями
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
