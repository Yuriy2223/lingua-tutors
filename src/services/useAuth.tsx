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

interface AuthProviderProps {
  children: ReactNode;
}

// Провайдер для обгортання компонентів
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Відстежуємо стан аутентифікації користувача
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      // Якщо користувач вийшов, очищуємо улюблені
      if (!currentUser) {
        setFavorites([]);
      }
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
    setFavorites([]); // Очищаємо улюблені викладачі при виході
    setUser(null); // Очищаємо стан користувача
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
    favorites,
    setFavorites, // Додаємо функцію для зміни favorites
  };

  // Рендеримо провайдер контексту з переданими значеннями
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
