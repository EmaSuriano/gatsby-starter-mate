import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const getFontAwesomeIcon = fontAwesomeIcon => {
  const fasIcon = findIconDefinition({
    prefix: 'fas',
    iconName: fontAwesomeIcon,
  });
  const fabIcon = findIconDefinition({
    prefix: 'fab',
    iconName: fontAwesomeIcon,
  });

  return fasIcon || fabIcon;
};

const SocialLink = ({ fontAwesomeIcon, name, url, color }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon icon={getFontAwesomeIcon(fontAwesomeIcon)} />
    </IconLink>
  </Tooltip>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
