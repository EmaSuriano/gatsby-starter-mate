import * as React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Heading } from 'rebass';
import PropTypes from 'prop-types';
import withLocation from '../utils/withLocation';

const SectionContainer = styled.section`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const DefaultBackground = () => <div />;

const Container = ({
  id,
  children,
  Background = DefaultBackground,
  css = {},
}) => (
  <div style={{ position: 'relative' }}>
    <Background />
    <ScrollableAnchor id={id}>
      <SectionContainer style={css}>{children}</SectionContainer>
    </ScrollableAnchor>
  </div>
);

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line
  css: PropTypes.object,
  Background: PropTypes.func,
};

const LinkAnimated = styled.span`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  border-bottom: ${props =>
    `${props.borderWidth} dashed ${props.theme.colors.primaryLight}`};
  transition: 0.4s;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -${props => props.borderWidth};
    background: ${props => props.theme.colors.secondaryLight};
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

const Header = withLocation(({ name, icon = '', label = '' }) => (
  <Heading color="secondaryDark" mb={4}>
    <LinkAnimated borderWidth="5px">
      {name}
      {icon && (
        <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
          {icon}
        </span>
      )}
    </LinkAnimated>
  </Heading>
));

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default {
  Container,
  Header,
};
