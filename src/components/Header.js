import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from './Logo/Portfolio.svg';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        {/* <a href="#home">
          <Image src={Logo} width="50px" alt="Portfolio Logo" />
        </a> */}
        {/* <Flex mr={[0, 3, 5]}> */}
        <SectionLinks>
          {({ allLinks }) => {
            const links = Object.entries(allLinks).reduce(
              (acc, [key, value]) => {
                const isHome = key === 'home';
                return isHome
                  ? {
                      ...acc,
                      home: (
                        <Image
                          src={Logo}
                          width="50px"
                          alt="Portfolio Logo"
                          onClick={value.onClick}
                        />
                      ),
                    }
                  : {
                      ...acc,
                      links: [
                        ...acc.links,
                        <RouteLink
                          onClick={value.onClick}
                          selected={value.selected}
                        >
                          {capitalize(key)}
                        </RouteLink>,
                      ],
                    };
              },
              { links: [], home: null },
            );

            return (
              <Fragment>
                {links.home}
                <Flex mr={[0, 3, 5]}>{links.links}</Flex>
              </Fragment>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
