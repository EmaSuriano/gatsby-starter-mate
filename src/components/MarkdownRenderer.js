import React from 'react';
import { SectionLink } from 'react-scroll-section';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const fixStyledComponent = StyledComponent => ({ children, ...props }) => (
  <StyledComponent {...props}>{children}</StyledComponent>
);

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: black;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.primaryLight};
    transition: all 250ms;
  }

  &:hover {
    color: white;

    &::after {
      height: 110%;
      width: 110%;
    }
  }
`;

const MarkdownParagraph = styled.p`
  line-height: 2em;

  &:first-child {
    margin-top: 0em;
  }
`;

const MarkdownList = styled.ul`
  margin: 0;
`;

const MarkdownListItem = styled.li`
  margin: 1em 0;
  line-height: 2em;
`;

const MarkdownLink = ({ href, children }) => {
  const isInnerLink = href.startsWith('#');
  return isInnerLink ? (
    <SectionLink section={href.substring(1, href.length)}>
      {({ onClick }) => <StyledLink onClick={onClick}>{children}</StyledLink>}
    </SectionLink>
  ) : (
    <StyledLink href={href}>{children}</StyledLink>
  );
};

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const markdownRenderer = {
  paragraph: fixStyledComponent(MarkdownParagraph),
  list: fixStyledComponent(MarkdownList),
  listItem: fixStyledComponent(MarkdownListItem),
  link: MarkdownLink,
};

export default markdownRenderer;
