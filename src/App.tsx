import { Routes, Route } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, ThemeType } from './styles/Theme.ts';
import { ModalProvider } from './components/Common/ModalProvder.tsx';
import { Loader } from './components/Common/Loader';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/ToastStyles.css';

import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';
import { TeachersPage } from './pages/TeachersPage/TeachersPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { AuthProvider } from './services/useAuth';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [themeType, setThemeType] = useState<ThemeType>('light');
  console.log(import.meta.env.VITE_YOUR_API_KEY);
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
    };
    console.log(import.meta.env.VITE_YOUR_API_KEY);
    loadData();
  }, []);

  const toggleTheme = (newTheme: ThemeType) => {
    setThemeType(newTheme);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={themes[themeType]}>
      <AuthProvider>
        <ModalProvider>
          <Suspense fallback={<Loader />}>
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <ToastContainer
            // position="top-right"
            position="top-center"
            autoClose={7000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
