// @flow

import * as React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Heading } from 'rebass';

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

type ContainerProps = {
  id: string,
  children: React.Node,
  Background?: Function,
};

const Container = ({ id, children, Background }: ContainerProps) => (
  <div style={{ position: 'relative' }}>
    <Background />
    <ScrollableAnchor id={id}>
      <SectionContainer>{children}</SectionContainer>
    </ScrollableAnchor>
  </div>
);

Container.defaultProps = {
  Background: DefaultBackground,
};

type HeaderProps = {
  name: string,
  label?: string,
  icon?: string,
};

const Header = ({ name, icon, label }: HeaderProps) => (
  <Heading color="secondaryDark" mb={4}>
    {name}
    {icon && (
      <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
        {icon}
      </span>
    )}
  </Heading>
);

Header.defaultProps = {
  icon: '',
  label: '',
};

export default {
  Container,
  Header,
};
