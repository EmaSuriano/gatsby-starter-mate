import { graphql, useStaticQuery } from 'gatsby';

type SocialLink = {
  id: string;
  url: string;
  name: string;
  fontAwesomeIcon: string;
};

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
          id
          url
          name
          fontAwesomeIcon
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
