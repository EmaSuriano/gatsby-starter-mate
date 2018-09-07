import React from 'react';
import styled from 'styled-components';
import { Box, Card as CardRebass } from 'rebass';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = ({ children, ...props }) => (
  <Box>
    <CardRebass {...props}>{children}</CardRebass>
  </Box>
);

export default Card;
