import React from 'react';
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

const defaultBackground = () => <div />;

const Container = ({ id, children, Background = defaultBackground, css }) => (
  <div style={{ position: 'relative' }}>
    <Background />
    <ScrollableAnchor id={id}>
      <SectionContainer style={css}>{children}</SectionContainer>
    </ScrollableAnchor>
  </div>
);

const Header = ({ name, icon, label }) => (
  <Heading color="secondaryDark" mb={4}>
    {name}
    <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
      {icon}
    </span>
  </Heading>
);

export default {
  Container,
  Header,
};
