import { Colors } from '@rebass/preset';
import styled from 'styled-components';

type ResponsiveProp<T> = T[];

type Props = {
  color: keyof Colors;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  width: ResponsiveProp<string>;
  height: ResponsiveProp<string>;
};

const Triangle = styled.div<Props>`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${({ theme, color, height, width, position = 'top-left' }) => {
    const [y, x] = position.split('-');

    return `
      border-${y}: ${height[0]} solid ${theme.colors[color]};
      ${y}: 0;

      border-${invertX(x)}: ${width[0]} solid transparent;
      ${x}: 0;
      
    `;
  }}

  @media only screen and (min-width: 768px) {
    ${({ height, width, position = 'top-left' }) => {
      const [y, x] = position.split('-');

      return `
        border-${y}-width: ${height[1]};
        border-${invertX(x)}-width: ${width[1]};
      `;
    }}
  }
`;

const invertX = (x: string) => (x === 'right' ? 'left' : 'right');

export default Triangle;
