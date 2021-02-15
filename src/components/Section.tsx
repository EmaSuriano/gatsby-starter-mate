import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass/styled-components';
import { Slide } from 'react-awesome-reveal';
import Link from './Link';

type ContainerProps = {
  id: string;
  children: ReactNode;
  Background?: () => JSX.Element;
};

const Container = ({
  id,
  children,
  Background = DefaultBackground,
}: ContainerProps) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

type HeaderProps = {
  name: string;
  icon?: string;
  label?: string;
};

const Header = ({ name, icon, label }: HeaderProps) => (
  <Slide direction="left" triggerOnce>
    <Heading color="text" mb={4}>
      <Link selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </Link>
    </Heading>
  </Slide>
);

const SectionContainer = styled.div`
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

  @media (max-width: 400px) {
    padding: 2em 1em;
  }
`;

const DefaultBackground = () => <div />;

export default {
  Container,
  Header,
};
