import React from 'react';
import { Label } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import withLocation from '../utils/withLocation';
import { SectionLink } from 'react-scroll-section';

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: ${props => `${props.borderWidth} solid transparent`};
  border-bottom-color: ${props =>
    props.selected && props.theme.colors.primaryLight};
  transition: 0.4s;
  scroll-behavior: smooth;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -${props => props.borderWidth};
    background: ${props => props.theme.colors.secondary};
    height: ${props => props.borderWidth};
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const RouteLink = ({ label, to }) => {
  // const href = `#${to}`;
  return (
    <Label
      ml={[2, 3]}
      color="background"
      fontSize={[2, 3]}
      css={{ cursor: 'pointer' }}
    >
      <SectionLink section={to}>
        {({ onClick, isSelected }) => (
          <LinkAnimated
            onClick={onClick}
            selected={isSelected}
            borderWidth="4px"
          >
            {label || to}
          </LinkAnimated>
        )}
      </SectionLink>
    </Label>
  );
};

RouteLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
  // location: PropTypes.string.isRequired,
};

// export default withLocation(RouteLink);

export default RouteLink;
