import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Box } from 'rebass';
import ContentfulLogo from './Logo/Contenful.svg';
import GatsbyLogo from './Logo/Gatsby.svg';

const FooterContainer = styled.footer`
  padding: 1em;
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RenponsiveLogo = styled.img`
  width: 100px;
  height: 25px;

  @media (min-width: 400px) {
    width: 150px;
    height: 35px;
  }
`;

const LogoFooter = ({ url, logo, alt }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const Footer = () => (
  <FooterContainer>
    <span>
      <Text
        mb={2}
        pb={1}
        css={{
          textTransform: 'uppercase',
          borderBottom: 'white 3px solid',
          display: 'table',
        }}
      >
        Powered By
      </Text>
    </span>
    <Flex justifyContent="center" alignItems="center">
      <LogoFooter
        url="https://www.contentful.com/"
        logo={ContentfulLogo}
        alt="Powered by Contentful"
      />
      <Text m={2} fontSize={4}>
        +
      </Text>
      <LogoFooter
        url="https://www.gatsbyjs.org/"
        logo={GatsbyLogo}
        alt="Gatsby Logo"
      />
    </Flex>
    {/* <Text textAlign="right">MIT © - 2018</Text> */}
  </FooterContainer>
);

export default Footer;
