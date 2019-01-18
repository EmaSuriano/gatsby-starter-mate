import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank">
      <FontAwesome name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
