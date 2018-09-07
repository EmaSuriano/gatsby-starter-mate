import React from 'react';
import { Label } from 'rebass';
import styled from 'styled-components';
import withLocation from '../utils/withLocation';

const LinkAnimated = styled.a`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: ${props =>
    props.selected &&
    `${props.borderWidth} solid ${props.theme.colors.primaryLight}`};
  transition: 0.4s;

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

const RouteLink = ({ label, to, location }) => {
  const href = `#${to}`;
  return (
    <Label
      ml={[2, 3]}
      color="background"
      fontSize={[2, 3]}
      css={{ cursor: 'pointer' }}
    >
      <LinkAnimated href={href} selected={location === href} borderWidth="4px">
        {label}
      </LinkAnimated>
    </Label>
  );
};

export default withLocation(RouteLink);
