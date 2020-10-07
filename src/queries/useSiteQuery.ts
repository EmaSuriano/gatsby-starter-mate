import { graphql, useStaticQuery } from 'gatsby';
import { SocialLink } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    name: string;
    roles: string[];
    socialLinks: SocialLink[];
  };
  site: {
    siteMetadata: {
      deterministic: boolean;
    };
  };
};

export const useSiteQuery = () => {
  const { contentfulAbout, site } = useStaticQuery<QueryResponse>(graphql`
    query SiteTitleQuery {
      contentfulAbout {
        name
        roles
        socialLinks {
          url
          name
          icon: fontAwesomeIcon
        }
      }
      site {
        siteMetadata {
          deterministic
        }
      }
    }
  `);

  return { ...contentfulAbout, ...site.siteMetadata };
};
