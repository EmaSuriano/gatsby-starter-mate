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
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Cabin`,
          file: `https://fonts.googleapis.com/css2?family=Cabin:wght@400;600&display=swap`,
        },
      ],
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
  plugins,
};

export default config;
