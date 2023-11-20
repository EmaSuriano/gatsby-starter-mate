import React from 'react';
import Headroom from 'react-headroom';
import { Box, Link as RebassLink, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import Link from './Link';
import { useHelmetQuery } from '../queries/useHelmetQuery';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';

const Header = () => {
  const { profile } = useHelmetQuery();

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <RebassLink href={`#${getSectionHref(SECTION.home)}`} variant="empty">
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
        </RebassLink>
        <Flex mr={[0, 3, 5]}>
          {(Object.keys(SECTION) as Array<keyof typeof SECTION>)
            .filter((id) => id !== 'home')
            .map((id) => (
              <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
                <Link href={`#${id}`} tabIndex={0}>
                  {SECTION[id]}
                </Link>
              </Box>
            ))}
        </Flex>
      </Flex>
    </StyledHeadroom>
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
