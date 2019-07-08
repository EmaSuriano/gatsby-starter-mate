import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.alt ? props.theme.colors.background : props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, alt }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank" alt={alt}>
      <FontAwesome name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.bool,
};

export default SocialLink;
