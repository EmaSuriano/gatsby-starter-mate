import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

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
    margin-top: 2em;
    line-height: 2em;
  }

  ul {
    margin: 0;
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
  transition: opacity 0.25s ease;
  border-radius: 50%;
  opacity: 1;

  &:hover {
    opacity: 0.7;
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
            <AboutText
              width={[1, 1, 4 / 6]}
              px={[1, 2, 4]}
              dangerouslySetInnerHTML={{
                __html: aboutMe.childMarkdownRemark.html,
              }}
            />

            <Box
              width={[1, 1, 2 / 6]}
              css={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Box
                bg="primaryLight"
                mt={[4, 4, 0]}
                ml={[0, 0, 1]}
                css={{ borderRadius: '50%' }}
              >
                <ProfilePicture src={profile.image.src} alt={profile.title} />
              </Box>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
