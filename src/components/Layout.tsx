import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { loadIcons } from '../utils/icons';
import { theme } from '../theme';
import Helmet from './Helmet';
import 'tippy.js/dist/tippy.css';
import '../styles.css';

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
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <main>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet />
      {children}
    </ThemeProvider>
  </main>
);

export default Layout;
