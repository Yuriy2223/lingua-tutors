import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeType } from '../../styles/Theme';
import { AuthButton } from './AuthButton';
import { Container } from '../Common/Container';

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1184px;
  padding: 20px 0 0;
`;

interface HeaderProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <AuthButton />
    </HeaderContainer>
  );
};
