import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Section from '../components/Section';
import Triangle from '../components/Triangle';
import withNavigation from '../utils/withNavigation';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const AboutText = styled(Box)`
  p:first-child {
    margin-top: 0em;
  }

  p {
    line-height: 2em;
  }

  ul {
    margin: 0;

    li {
      margin: 1em 0;
      line-height: 2em;
    }
  }

  a {
    display: inline-block;
    transition: color 250ms, text-shadow 250ms;
    color: black;
    text-decoration: none;
    position: relative;

    &:after {
      position: absolute;
      z-index: -1;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      content: '';
      width: 100%;
      height: 3px;
      background-color: ${props => props.theme.colors.primaryLight};
      transition: all 250ms;
    }

    &:hover {
      color: white;

      &::after {
        height: 110%;
        width: 110%;
      }
    }
  }
`;

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                html
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
      `}
      render={data => {
        const { aboutMe, profile } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <AboutText
                dangerouslySetInnerHTML={{
                  __html: aboutMe.childMarkdownRemark.html,
                }}
              />
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              css={{ maxWidth: '300px', margin: 'auto' }}
            >
              <ProfilePicture
                src={profile.image.src}
                alt={profile.title}
                mt={[4, 4, 0]}
                ml={[0, 0, 1]}
              />
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default withNavigation({ label: 'About', id: 'about' })(About);
