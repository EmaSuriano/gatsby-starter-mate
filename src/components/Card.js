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

const NewCard = styled(CardRebass)`
  position: relative;
  box-shadow: 0 4px 10px ${props => props.theme.colors.primary}19;
  transition: all 0.25s;
  top: 0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px ${props => props.theme.colors.primary}5F;
  }
`;

export const Card = ({ children, ...props }) => (
  <Box>
    <NewCard {...props} boxShadow={0}>
      {children}
    </NewCard>
  </Box>
);

export default Card;
