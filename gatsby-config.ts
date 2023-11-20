import type { GatsbyConfig } from 'gatsby';
import colors from './src/colors.json';

const plugins: GatsbyConfig['plugins'] = [
  'gatsby-plugin-fontawesome-css',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-typescript',
  'gatsby-plugin-styled-components',
  'gatsby-transformer-remark',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Mate Portfolio',
      short_name: 'Mate',
      start_url: '/',
      background_color: colors.background,
      theme_color_in_head: false,
      display: 'minimal-ui',
      icon: 'icon.png',
    },
  },
  {
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.ACCESS_TOKEN,
      spaceId: process.env.SPACE_ID,
    },
  },
];

if (process.env.ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: { trackingId: process.env.ANALYTICS_ID },
  });
}

const config: GatsbyConfig = {
  siteMetadata: {
    deterministic: false,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins,
};

export default config;
