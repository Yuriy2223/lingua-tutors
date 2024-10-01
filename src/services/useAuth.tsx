import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';
import { auth } from './firebase';
import {
  User,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// Інтерфейс для контексту аутентифікації
interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Інтерфейс для пропсів провайдера аутентифікації
interface AuthProviderProps {
  children: ReactNode;
}

// Створення контексту для аутентифікації
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Хук для доступу до контексту
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

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

  // Значення, яке передаємо через контекст
  const value: AuthContextProps = {
    user,
    login,
    logout,
  };

  // Рендеримо провайдер контексту з переданими значеннями
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
