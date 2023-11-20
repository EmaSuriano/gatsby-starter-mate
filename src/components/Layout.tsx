import React, { ReactNode } from 'react';
import { Theme } from '@rebass/preset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { loadIcons } from '../utils/icons';
import { theme } from '../theme';
import Helmet from './Helmet';
import 'tippy.js/dist/tippy.css';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

loadIcons();

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
  }

  html { 
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box; 
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    font-family: ${(props) => props.theme.fonts.body};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <main>
    <ThemeProvider theme={theme as Theme}>
      <GlobalStyle />
      <Helmet />
      {children}
    </ThemeProvider>
  </main>
);

export default Layout;
