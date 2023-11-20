declare module '@rebass/preset' {
  const baseTheme: Theme;
  export default baseTheme;

  export interface Theme {
    colors: Colors;
    fonts: Fonts;
    fontSizes?: number[] | null;
    fontWeights: FontWeights;
    lineHeights: LineHeights;
    space?: number[] | null;
    sizes: Sizes;
    radii: Radii;
    shadows: Shadows;
    text: Text;
    queries: Queries;
    buttons: Record<string, Button>;
  }

  interface Colors {
    text: string;
    background: string;
    primary: string;
    secondary: string;
    muted: string;
    highlight: string;
  }

  interface Button {
    [key: string]: string | number;
  }

  interface Button {}

  interface Fonts {
    body: string;
    heading: string;
    monospace: string;
  }

  interface FontWeights {
    body: number;
    heading: number;
    bold: number;
  }

  interface LineHeights {
    body: number;
    heading: number;
  }

  interface Sizes {
    avatar: number;
  }

  interface Radii {
    default: number;
    circle: number;
  }

  interface Shadows {
    card: string;
  }

  interface Text {
    heading: HeadingOrRoot;
    display: Display;
    caps: Caps;
  }

  interface Queries {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }
}
