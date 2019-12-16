import React from 'react';
import { Link } from 'rebass';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from 'react-fontawesome';
import 'tippy.js/dist/tippy.css'; // eslint-disable-line

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, color }) => (
  <Tippy content={name} placement="bottom" trigger="mouseenter" arrow={false}>
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon name={fontAwesomeIcon} />
    </IconLink>
  </Tippy>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;
