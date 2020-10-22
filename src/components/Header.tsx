import React from 'react';
import Headroom from 'react-headroom';
import { Box, Button, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { useScrollSection, useScrollSections } from 'react-scroll-section';
import Link from './Link';
import { capitalize } from '../utils/string';
import { useHelmetQuery } from '../queries/useHelmetQuery';

const Header = () => {
  const sections = useScrollSections();

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <HomeLink />
        <Flex mr={[0, 3, 5]}>
          {sections
            .filter(({ id }) => id !== 'home')
            .map(({ id, onClick, selected }) => (
              <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
                <Link onClick={onClick} selected={selected} tabIndex={0}>
                  {capitalize(id)}
                </Link>
              </Box>
            ))}
        </Flex>
      </Flex>
    </StyledHeadroom>
  );
};

const HomeLink = () => {
  const { profile } = useHelmetQuery();
  const { onClick } = useScrollSection('home');

  return (
    <Button onClick={onClick} variant="empty">
      <Flex justifyContent="center">
        <Image
          src={profile.bigIcon.src}
          height={['60px', '80px']}
          width={['60px', '80px']}
          alt="Portfolio Logo"
          p={2}
          css={{ borderRadius: '20px', cursor: 'pointer' }}
        />
      </Flex>
    </Button>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }

  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  position: absolute;
  width: 100%;
`;

export default Header;
