import React from 'react';
import { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';
import PropTypes from 'prop-types';
import { configureAnchors } from 'react-scrollable-anchor';
import 'react-tippy/dist/tippy.css';
import config from 'react-reveal/globals';
import theme from '../theme';
import Helmet from './Helmet';
import { SectionProvider } from './SectionContext';
import Header from './Header';
import Footer from './Footer';

const resetCss = () => injectGlobal`
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Cabin;
}
`;

resetCss();
configureAnchors({ scrollDuration: 600, offset: 0 });
config({ ssrFadeout: true });

const Layout = ({ children }) => (
  <Provider theme={theme}>
    <SectionProvider>
      <Helmet />
      <Header />
      {children}
      <Footer />
    </SectionProvider>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
