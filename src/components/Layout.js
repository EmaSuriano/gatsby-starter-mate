import React, { Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';
import PropTypes from 'prop-types';
import { configureAnchors } from 'react-scrollable-anchor';
import 'react-tippy/dist/tippy.css';
import theme from '../theme';
import Helmet from './Helmet';

const resetCss = () => injectGlobal`
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Cabin;
}
`;

configureAnchors({ scrollDuration: 600, offset: 0 });
resetCss();

const ScrollContainer = styled.div`
  scroll-behavior: smooth;
  display: block;
`;

const Layout = ({ children }) => (
  <Provider theme={theme}>
    <ScrollContainer>
      <Helmet />
      {children}
    </ScrollContainer>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
