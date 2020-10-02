import React, { ReactNode } from 'react';
import { useScrollSection } from 'react-scroll-section';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-block;
  transition: color 250ms, text-shadow 250ms;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:after {
    position: absolute;
    z-index: -1;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
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

type LinkProps = {
  href: string;
  children: ReactNode;
};

const MarkdownLink = ({ href, children }: LinkProps) => {
  const isInnerLink = href.startsWith('#');
  if (isInnerLink)
    return (
      <InnerLink href={href.substring(1, href.length)}>{children}</InnerLink>
    );

  return (
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {children}
    </StyledLink>
  );
};

const InnerLink = ({ href, children }: LinkProps) => {
  const { onClick } = useScrollSection(href);

  return <StyledLink onClick={onClick}>{children}</StyledLink>;
};

export default {
  paragraph: MarkdownParagraph,
  list: MarkdownList,
  listItem: MarkdownListItem,
  link: MarkdownLink,
};
