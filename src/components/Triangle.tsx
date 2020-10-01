import { Colors } from '@rebass/preset';
import styled from 'styled-components';

type ResponsiveProp<T> = T[];

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type Props = {
  color: keyof Colors;
  position?: Position;
  width: ResponsiveProp<string>;
  height: ResponsiveProp<string>;
};

const Triangle = styled.div<Props>`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${({ theme, color, height, position = 'top-left' }) => {
    const border = `${height[0]} solid ${theme.colors[color]};`;
    return position.includes('bottom')
      ? `border-bottom: ${border}; bottom: 0;`
      : `border-top: ${border};`;
  }}

  ${({ width, position = 'top-left' }) => {
    const border = `${width[0]} solid transparent;`;
    return position.includes('right')
      ? `border-left: ${border}; right: 0;`
      : `border-right: ${border};`;
  }}


  @media only screen and (min-width: 768px) {
    ${({ height, position = 'top-left' }) =>
      position.includes('bottom')
        ? `border-bottom-width: ${height[1]};`
        : `border-top-width: ${height[1]};`}

    ${({ width, position = 'top-left' }) => {
      return position.includes('right')
        ? `border-left-width: ${width[1]};`
        : `border-right-width: ${width[1]};`;
    }};
  }
`;

export default Triangle;
