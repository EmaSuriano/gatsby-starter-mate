import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import colors from '../../colors';
import Helmet from './Helmet';

library.add(fab, fas);

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    font-display: fallback;
    overflow-x: hidden;
  }
`;

config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>
        <Helmet />
        {children}
      </ScrollingProvider>
    </ThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
