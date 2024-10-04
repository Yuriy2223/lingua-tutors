import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../../styles/Theme.ts';

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
  }
`;
const Select = styled.select`
  padding: 4px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.primaryColorLight};
  color: ${({ theme }) => theme.color};

  transition: all 300ms ease-in-out;
  outline: none;
`;
interface ThemeSwitcherProps {
  toggleTheme: (theme: ThemeType) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  toggleTheme,
}) => {
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    toggleTheme(event.target.value as ThemeType);
  };

  return (
    <SwitcherContainer>
      <label htmlFor="theme-selector" style={{ marginRight: '10px' }}>
        Theme:
      </label>
      <Select
        id="theme-selector"
        onChange={handleThemeChange}
        defaultValue="light"
      >
        <option value="light">Cream</option>
        <option value="mint">Mint</option>
        <option value="sky">Sky</option>
        <option value="rose">Rose</option>
        <option value="peach">Peach</option>
      </Select>
    </SwitcherContainer>
  );
};
