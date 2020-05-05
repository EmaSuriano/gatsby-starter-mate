import styled from 'styled-components';
import { Card as CardRebass } from 'rebass/styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = styled(CardRebass).attrs({
  bg: 'white',
  boxShadow: 0,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default Card;
