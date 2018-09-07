import React, { Fragment } from 'react';
import { injectGlobal } from 'styled-components';
import { Provider } from 'rebass';
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

const Layout = ({ children }) => (
  <Provider theme={theme}>
    <Fragment>
      <Helmet />
      {children}
    </Fragment>
  </Provider>
);

export default Layout;
