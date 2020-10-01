import preset, { Colors, Theme } from '@rebass/preset';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const colors: Colors = {
  background: '#FFFFFF',
  muted: '#f0e6f6',
  gray: '#ddd',
  text: '#333333',

  primary: '#7c37ad',
  secondary: '#ff4081',
  highlight: '#ff79b0',

  // primary: '#7c37ad',
  // primaryLight: '#ae66df',
  // primaryDark: '#4b007d',

  // secondary: '#ff4081',
  // secondaryLight: '#ff79b0',
  // secondaryDark: '#c60055',
};

const theme: Theme = {
  ...(preset as Theme),
  colors,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

export default theme;
