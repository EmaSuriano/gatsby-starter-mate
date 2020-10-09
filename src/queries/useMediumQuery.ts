import { graphql, useStaticQuery } from 'gatsby';
import { MediumAuthor, MediumPost } from '../types';
import { MEDIUM_CDN, MEDIUM_URL } from '../utils/constants';

export type QueryResponse = {
  site: {
    siteMetadata: {
      isMediumUserDefined: boolean;
    };
  };
  mediumUser: {
    id: string;
    username: string;
    name: string;
    posts: {
      id: string;
      uniqueSlug: string;
      title: string;
      createdAt: string;
      virtuals: {
        subtitle: string;
        readingTime: number;
        previewImage: {
          imageId: string;
        };
      };
    }[];
  };
};

type Response = {
  posts: MediumPost[];
  author: MediumAuthor | null;
};

const EMPTY_RESPONSE = { author: null, posts: [] };

export const useMediumQuery = (): Response => {
  const { site, mediumUser } = useStaticQuery<QueryResponse>(graphql`
    query MediumPostQuery {
      site {
        siteMetadata {
          isMediumUserDefined
        }
      }
      mediumUser {
        id
        name
        username
        posts {
          id
          uniqueSlug
          title
          createdAt(formatString: "MMM YYYY")
          virtuals {
            subtitle
            readingTime
            previewImage {
              imageId
            }
          }
        }
      }
    }
  `);

  if (!site.siteMetadata.isMediumUserDefined) return EMPTY_RESPONSE;

  const { posts: rawPosts, ...author } = mediumUser;
  const posts = rawPosts.map((p) => ({
    title: p.title,
    text: p.virtuals.subtitle,
    cover: `${MEDIUM_CDN}/${p.virtuals.previewImage.imageId}`,
    url: `${MEDIUM_URL}/@${mediumUser.username}/${p.uniqueSlug}`,
    date: p.createdAt,
    time: p.virtuals.readingTime,
  }));

  return {
    posts,
    author,
  };
};
