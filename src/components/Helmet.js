import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Helmet = ({ theme = {} }) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        contentfulAbout {
          name
          description
          profile {
            favicon16: resize(width: 16) {
              src
            }
            favicon32: resize(width: 32) {
              src
            }
            bigIcon: resize(width: 192) {
              src
            }
            appleIcon: resize(width: 180) {
              src
            }
          }
        }
      }
    `}
    render={data => {
      const { name, description, profile } = data.contentfulAbout;
      const title = `${name} Portofolio`;

      return (
        <ReactHelmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="shortcut icon" href={profile.favicon32.src} />
          <meta name="theme-color" content={theme.background} />
          <meta name="image" content={profile.favicon32.src} />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={profile.favicon32.src} />

          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={profile.bigIcon.src} />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={profile.bigIcon.src} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={profile.appleIcon.src}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={profile.favicon32.src}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={profile.favicon16.src}
          />

          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);
