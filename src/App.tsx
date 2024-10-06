import { Routes, Route } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, ThemeType } from './styles/Theme.ts';
import { ModalProvider } from './services/ModalProvder.tsx';
import { Loader } from './components/Common/Loader';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/ToastStyles.css';
import { AuthProvider } from './services/useAuth';

const HomePage = React.lazy(() =>
  import('./pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const Header = React.lazy(() =>
  import('./components/Header/Header').then(module => ({
    default: module.Header,
  }))
);

const TeachersPage = React.lazy(() =>
  import('./pages/TeachersPage/TeachersPage').then(module => ({
    default: module.TeachersPage,
  }))
);

const FavoritesPage = React.lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage').then(module => ({
    default: module.FavoritesPage,
  }))
);

export const App: React.FC = () => {
  const [themeType, setThemeType] = useState<ThemeType>('light');
  const [loading, setLoading] = useState(true);

  const toggleTheme = (newTheme: ThemeType) => {
    setThemeType(newTheme);
  };

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoading(false);
    };
    loadData();
  }, []);

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
            position="top-center"
            autoClose={5000}
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
