import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors[props.color]};

  &:hover {
    color: ${props => props.theme.colors[props.hover]};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, color, hoverColor }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank" color={color} hover={hoverColor}>
      <FontAwesome name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
);

export default SocialLink;
