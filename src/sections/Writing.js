import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import SectionCard from '../components/SectionCard';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const parsePost = postFromGraphql => {
  const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400';
  const MEDIUM_URL = 'https://medium.com';
  const {
    id,
    uniqueSlug,
    createdAt,
    title,
    virtuals,
    author,
  } = postFromGraphql;
  const image =
    virtuals.previewImage.imageId &&
    `${MEDIUM_CDN}/${virtuals.previewImage.imageId}`;
  return {
    id,
    title,
    time: virtuals.readingTime,
    date: createdAt,
    description: virtuals.subtitle,
    image,
    url: `${MEDIUM_URL}/${author.username}/${uniqueSlug}`,
  };
};

const edgeToArray = data => data.edges.map(edge => edge.node);

const Writing = () => (
  <Section.Container id="writing" Background={Background}>
    <StaticQuery
      query={graphql`
        query MediumPostQuery {
          site {
            siteMetadata {
              isMediumUserDefined
              sectionsVisibility {
                about
                projects
                writing
                youtube
              }
            }
          }
          allMediumPost(limit: 8, sort: { fields: createdAt, order: DESC }) {
            edges {
              node {
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
                author {
                  username
                }
              }
            }
          }
        }
      `}
      render={({ allMediumPost, site }) => {
        const posts = edgeToArray(allMediumPost).map(parsePost);
        const { isMediumUserDefined, sectionsVisibility } = site.siteMetadata;

        console.log(sectionsVisibility);
        return (
          isMediumUserDefined && (
            <React.Fragment>
              <Section.Header name="Writing" icon="✍️" label="writing" />
              <CardContainer minWidth="300px">
                {posts.map(p => (
                  <Fade bottom>
                    <SectionCard key={p.id} {...p} />
                  </Fade>
                ))}
              </CardContainer>
            </React.Fragment>
          )
        );
      }}
    />
  </Section.Container>
);

export default Writing;
