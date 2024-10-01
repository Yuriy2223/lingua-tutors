import { DefaultTheme } from 'styled-components';

// Визначаємо типи для теми
export type ThemeType = 'light' | 'mint' | 'sky' | 'rose' | 'peach';

// Світла тема
export const lightTheme: DefaultTheme = {
  primaryColorLight: 'var(--light-cream)',
  primaryColorDark: 'var(--golden-yellow)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
  pc: 'var(--pc1)',
  svg: 'var(--svg1)',
  fill: 'var(--svg-pc1)',
};

// М'ятна тема
export const mintTheme: DefaultTheme = {
  primaryColorLight: 'var(--mint-green)',
  primaryColorDark: 'var( --soft-teal)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
  pc: 'var(--pc2)',
  svg: 'var(--svg2)',
  fill: 'var(--svg-pc2)',
};

// Небесна тема
export const skyTheme: DefaultTheme = {
  primaryColorLight: 'var(--sky-blue)',
  primaryColorDark: 'var(--powder-blue)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
  pc: 'var(--pc3)',
  svg: 'var(--svg3)',
  fill: 'var(--svg-pc3)',
};

// Рожева тема
export const roseTheme: DefaultTheme = {
  primaryColorLight: 'var(--soft-rose)',
  primaryColorDark: 'var(--peach)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
  pc: 'var(--pc4)',
  svg: 'var(--svg4)',
  fill: 'var(--svg-pc4)',
};

// Персикова тема
export const peachTheme: DefaultTheme = {
  primaryColorLight: 'var(--blush-pink)',
  primaryColorDark: 'var( --coral)',
  primaryBlack: 'var(--primary)',
  primaryOpacity: 'var(--primary-opacity)',
  white: 'var(--white-color)',
  pc: 'var(--pc5)',
  svg: 'var(--svg5)',
  fill: 'var(--svg-pc5)',
};

// Експорт об'єкту всіх тем
export const themes = {
  light: lightTheme,
  mint: mintTheme,
  sky: skyTheme,
  rose: roseTheme,
  peach: peachTheme,
};
