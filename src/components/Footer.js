import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.background};

  & a {
    color: ${(props) => props.theme.colors.background};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
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
      }
    `}
    render={(data) => {
      const { name, socialLinks } = data.contentfulAbout;

      return (
        <Box p={[2, 3]} backgroundColor="primaryDark" id="footer">
          <FooterContainer>
            <Fade left>
              <TextFooter fontSize={[2, 3]}>
                <span>{`${name} Portfolio - Powered by `}</span>
                <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
                <span>, </span>
                <Link href="https://www.contentful.com/" mr={1}>
                  Contentful
                </Link>
                <span> and </span>
                <Link href="https://www.netlify.com/" mr={1}>
                  Netlify
                </Link>
                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </TextFooter>
            </Fade>
            <Flex>
              <Fade right>
                {socialLinks.map(({ id, ...rest }) => (
                  <Box mx={[2, 3]} fontSize={[4, 5]} key={id}>
                    <SocialLink {...rest} color="background" />
                  </Box>
                ))}
              </Fade>
            </Flex>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;
