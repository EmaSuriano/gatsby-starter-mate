import styled from 'styled-components';
import { Box } from 'rebass';

const ImageSubtitle = styled(Box)`
  position: absolute;
  display: inline;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  ${props => props.x || 'left'}: 0;
  ${props => props.y || 'top'}: 0;
  ${props =>
    props.invert
      ? 'float: left; padding-right: 20px; clip-path: polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);'
      : 'float: right; padding-left: 20px; clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);'};
`;

export default ImageSubtitle;
