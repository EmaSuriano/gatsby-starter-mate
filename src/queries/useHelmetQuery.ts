import { graphql, useStaticQuery } from 'gatsby';
import { Favicon } from '../types';

type QueryResponse = {
  contentfulAbout: {
    name: string;
    description: string;
    profile: {
      favicon16: Favicon;
      favicon32: Favicon;
      bigIcon: Favicon;
      appleIcon: Favicon;
    };
  };
};

export const useHelmetQuery = () => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
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
  `);

  return contentfulAbout;
};
