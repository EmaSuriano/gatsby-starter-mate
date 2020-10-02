import { graphql, useStaticQuery } from 'gatsby';

export type QueryResponse = {
  contentfulAbout: {
    aboutMe: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    profile: {
      title: string;
      image: {
        src: string;
      };
    };
  };
};

export const useAboutMeQuery = () => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query AboutMeQuery {
      contentfulAbout {
        aboutMe {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        profile {
          title
          image: resize(width: 450, quality: 100) {
            src
          }
        }
      }
    }
  `);

  return contentfulAbout;
};
