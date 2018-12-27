import styled from 'styled-components';
import { Text } from 'rebass';

const ImageSubtitle = styled(Text)`
  position: absolute;
  display: inline;

  ${props => props.x}: 0;
  ${props => props.y}: 0;

  /* top: ${props => props.top}; */
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  ${props =>
    props.invert
      ? 'float: left; padding-right: 20px; clip-path: polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);'
      : 'float: right; padding-left: 20px; clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);'};

  /* @media (min-width: 400px) {
    top: ${props => props['top-s']};
  } */
`;

export default ImageSubtitle;
