import React from 'react';
import { Link } from 'rebass/styled-components';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';
import FontAwesomeIcon from 'react-fontawesome';
import { lighten } from 'polished';
import 'tippy.js/dist/tippy.css'; // eslint-disable-line

type Props = {
  icon: string;
  name: string;
  url: string;
  invert?: boolean;
};

const SocialLink = ({ icon, name, url, invert }: Props) => (
  <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={false}>
    <IconLink
      href={url}
      target="_blank"
      invert={invert}
      rel="noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon name={icon} />
    </IconLink>
  </Tippy>
);

const IconLink = styled(Link)<{ invert?: boolean }>`
  transition: color 0.4s;
  color: ${({ theme, invert }) =>
    invert ? theme.colors.background : theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  }
`;

export default SocialLink;
