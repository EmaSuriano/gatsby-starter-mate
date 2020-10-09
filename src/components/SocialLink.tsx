import React from 'react';
import { Link } from 'rebass/styled-components';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lighten } from 'polished';
import { SocialLink as SocialLinkType } from '../types';
import { getIconDefinition } from '../utils/icon-loader';

type Props = SocialLinkType & {
  invert?: boolean;
};

const SocialLink = ({ icon, name, url, invert }: Props) => {
  const iconDefinition = getIconDefinition(icon);
  if (!iconDefinition) {
    console.warn(`The icon "${icon}" was not properly loaded ...`);
    return null;
  }

  return (
    <Tippy
      content={name}
      placement="bottom"
      trigger="mouseenter focus"
      arrow={false}
    >
      <IconLink
        href={url}
        target="_blank"
        invert={invert}
        rel="noreferrer"
        aria-label={name}
      >
        <FontAwesomeIcon icon={iconDefinition} title={name} />
      </IconLink>
    </Tippy>
  );
};

const IconLink = styled(Link)<{ invert?: boolean }>`
  transition: color 0.4s;
  color: ${({ theme, invert }) =>
    invert ? theme.colors.background : theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => lighten(0.3, theme.colors.primary)};
  }
`;

export default SocialLink;
