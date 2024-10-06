import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../../styles/Theme';
import { Iconsvg } from '../Common/Icons';
import { AuthButton } from './AuthButton';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Navbar } from './Navbar';

const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 75%;
  height: 100vh;
  background-color: #f8f8f8;
  transition: right 300ms ease;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
`;
const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;
const CloseButton = styled.button`
  padding: 6px;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: transparent;
  transition: transform 300ms ease-in-out;

  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;
const CloseIcon = styled(Iconsvg)`
  width: 32px;
  height: 32px;
`;
interface MobileMenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
  toggleTheme: (theme: ThemeType) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  closeMenu,
  toggleTheme,
}) => {
  return (
    <>
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
      <MobileMenuContainer $isOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu}>
          <CloseIcon width={32} height={32} iconName="close" />
        </CloseButton>
        <MenuWrapper>
          <Navbar onClick={closeMenu} />
          <ThemeSwitcher toggleTheme={toggleTheme} />
          <AuthButton />
        </MenuWrapper>
      </MobileMenuContainer>
    </>
  );
};
