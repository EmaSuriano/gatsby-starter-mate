import React from 'react';
import { Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const cardHeight = '200px';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  width: calc(100% - 100px);
  flex-direction: column;
  padding: 10px;

  @media (min-width: 400px) {
    width: calc(100% - 200px);
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  margin: auto;

  @media (min-width: 400px) {
    width: 200px;
  }
`;

const ProjectImage = styled(Image)`
  padding: 10px;
  /* margin-top: 50px; */
  height: 100px !important;
  width: 100px;

  @media (min-width: 400px) {
    width: 200px;
    padding: 40px;
    height: ${cardHeight} !important;
    margin-top: 0px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  top: calc(
    -${cardHeight} - 4px
  ); /*don't know why I have to add 4px here ... */
  height: ${cardHeight};
`;

const Project = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
  publishedDate,
  logo,
}) => (
  <Card p={0}>
    <Flex style={{ height: cardHeight }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width="100%" style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={logo.image.src} alt={logo.title} />
        <ProjectTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={5}>
              <SocialLink
                color="primary"
                hoverColor="primaryLight"
                name="Check repository"
                fontAwesomeIcon="github"
                url={repositoryUrl}
              />
            </Box>
            <Box mx={1} fontSize={5}>
              <SocialLink
                color="primary"
                hoverColor="primaryLight"
                fontSize={5}
                mx={1}
                name="See project"
                fontAwesomeIcon="globe"
                url={projectUrl}
              />
            </Box>
          </Flex>
          <ImageSubtitle bg="primaryLight" color="white" y="bottom" x="right">
            {type}
          </ImageSubtitle>
          <ImageSubtitle bg="backgroundDark" y="top" x="left" invert>
            {publishedDate}
          </ImageSubtitle>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
);

const Projects = () => (
  <Section.Container id="projects" Background={Background}>
    <Section.Header name="Projects" icon="💻" Box="notebook" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          contentfulAbout {
            projects {
              id
              name
              description
              projectUrl
              repositoryUrl
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
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.projects.map((p, i) => (
            <Fade bottom delay={i * 200}>
              <Project key={p.id} {...p} />
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Projects;
