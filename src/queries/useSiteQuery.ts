import { graphql, useStaticQuery } from 'gatsby';
import { Landing, SocialLink } from '../types';

type QueryResponse = {
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

export const useSiteQuery = (): Landing & { deterministic: boolean } => {
  const { contentfulAbout, site } = useStaticQuery<QueryResponse>(graphql`
    query SiteQuery {
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
