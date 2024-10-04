import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeType } from '../../styles/Theme';
import { AuthButton } from './AuthButton';
import { Container } from '../Common/Container';
import { MobileMenu } from './MobileMenu';
import { Iconsvg } from '../Common/Icons';

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 0;
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const MenuButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  padding: 5px;

  @media (min-width: 900px) {
    display: none;
  }
`;
const MenuIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.primaryColorLight};
`;
const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    gap: 10px;
  }
`;

interface HeaderProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <MenuButton onClick={toggleMenu}>
          <MenuIcon width={32} height={32} iconName="menu" />
        </MenuButton>
        <DesktopMenu>
          <Navbar />
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <AuthButton />
        </DesktopMenu>

        <MobileMenu
          isMenuOpen={isMenuOpen}
          closeMenu={closeMenu}
          toggleTheme={toggleTheme}
        />
      </HeaderWrapper>
    </HeaderContainer>
  );
};
