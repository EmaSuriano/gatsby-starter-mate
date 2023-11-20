import baseTheme, { Theme } from '@rebass/preset';
import colors from './colors.json';

export const theme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    ...colors,
  },
  queries: {
    xs: '@media screen and (max-width: 40em)',
    sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
    md: '@media screen and (min-width: 52em) and (max-width: 64em)',
    lg: '@media screen and (min-width: 64em)',
  },
  buttons: {
    empty: {
      p: 0,
      border: 0,
      m: 0,
      background: 'transparent',
    },
  },
};
