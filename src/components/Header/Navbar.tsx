import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../services/authContext';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 4px 0;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 28px;
    padding: 4px 0;
  }
`;

const NavbarLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary);
  padding: 4px 8px;
  border-radius: 5px;
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.primaryColorLight};
  }

  &.active {
    background-color: ${({ theme }) => theme.primaryColorLight};
    font-weight: bold;
  }
`;

interface NavbarProps {
  onClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  const { user } = useAuth();

  return (
    <NavbarContainer>
      <NavbarLink to="/" onClick={onClick}>
        Home
      </NavbarLink>
      <NavbarLink to="/teachers" onClick={onClick}>
        Teachers
      </NavbarLink>
      {user && (
        <NavbarLink to="/favorites" onClick={onClick}>
          Favorites
        </NavbarLink>
      )}
    </NavbarContainer>
  );
};
