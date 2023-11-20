import React from 'react';
import styled from 'styled-components';
import { Text, Box, Flex } from 'rebass/styled-components';
import { Fade } from 'react-awesome-reveal';
import SocialLink from './SocialLink';
import Link from './Link';
import { useSiteQuery } from '../queries/useSiteQuery';
import { CONTENTFUL_URL, GATSBY_URL, NETLIFY_URL } from '../utils/constants';

const Footer = () => {
  const { name, socialLinks } = useSiteQuery();

  return (
    <Box p={[2, 3]} backgroundColor="primary" id="footer" as="footer">
      <FooterContainer>
        <Fade direction="left" triggerOnce>
          <Text fontSize={[2, 3]} color="background">
            <span>{`${name} Portfolio - Powered by `}</span>
            <Link href={GATSBY_URL}>Gatsby</Link>
            <span>, </span>
            <Link href={CONTENTFUL_URL}>Contentful</Link>
            <span> and </span>
            <Link href={NETLIFY_URL}>Netlify</Link>{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </Text>
        </Fade>
        <Flex>
          <Fade direction="right" triggerOnce cascade damping={0.5}>
            {socialLinks.map((sl) => (
              <Box mx={[2, 3]} fontSize={[4, 5]} key={sl.name}>
                <SocialLink {...sl} invert />
              </Box>
            ))}
          </Fade>
        </Flex>
      </FooterContainer>
    </Box>
  );
};

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

export default Footer;
