import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    projects: {
      id: string;
      name: string;
      description: string;
      homepage: string;
      repository: string;
      publishedDate: string;
      type: string;
      logo: {
        title: string;
        image: {
          src: string;
        };
      };
    }[];
  };
};

export const useProjectsQuery = (): Project[] => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query ProjectsQuery {
      contentfulAbout {
        projects {
          id
          name
          description
          homepage: projectUrl
          repository: repositoryUrl
          publishedDate(formatString: "YYYY")
          type
          logo {
            title
            image: resize(width: 200, quality: 100) {
              src
            }
          }
        }
      }
    }
  `);

  return contentfulAbout.projects.map(({ logo, ...rest }) => ({
    ...rest,
    logo: {
      alt: logo.title,
      src: logo.image.src,
    },
  }));
};
