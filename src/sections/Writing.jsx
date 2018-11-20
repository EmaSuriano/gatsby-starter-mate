import React from 'react';
import { Heading, Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

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

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Post = ({ title, text, image, url, date, time }) => {
  const timestamp = `${date} - ${Math.ceil(time)} min`;
  return (
    <Card
      onClick={() => window.open(url, '_blank')}
      css={{ cursor: 'pointer' }}
      p={0}
    >
      <EllipsisHeading m={3} p={1}>
        {title}
      </EllipsisHeading>
      {image && <CoverImage src={image} height="200px" alt={title} />}
      <Text m={3}>{text}</Text>
      <ImageSubtitle bg="primaryLight" color="white">
        {timestamp}
      </ImageSubtitle>
    </Card>
  );
};

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
    text: virtuals.subtitle,
    image,
    url: `${MEDIUM_URL}/${author.username}/${uniqueSlug}`,
  };
};

const edgeToArray = data => data.edges.map(edge => edge.node);

const Writing = () => (
  <Section.Container id="writing" Background={Background}>
    <Section.Header name="Writing" icon="✍️" label="writing" />
    <StaticQuery
      query={graphql`
        query MediumPostQuery {
          allMediumPost(limit: 6, sort: { fields: createdAt, order: DESC }) {
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
      render={({ allMediumPost }) => {
        const posts = edgeToArray(allMediumPost).map(parsePost);
        return (
          <CardContainer minWidth="300px">
            {posts.map(p => (
              <Fade bottom>
                <Post key={p.id} {...p} />
              </Fade>
            ))}
          </CardContainer>
        );
      }}
    />
  </Section.Container>
);

export default Writing;
