import React from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const Header = () => (
  <HeaderContainer>
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      p={3}
    >
      <a href="#home">
        <Image src={Logo} width="50px" alt="Portfolio Logo" />
      </a>
      <Flex mr={[0, 3, 5]}>
        <RouteLink label="About" to="about" />
        <RouteLink label="Projects" to="projects" />
        <RouteLink label="Writing" to="writing" />
      </Flex>
    </Flex>
  </HeaderContainer>
);

export default Header;
