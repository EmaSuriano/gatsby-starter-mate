import styled from 'styled-components';

const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -2;

  ${props => {
    const border = `${props.height[0]} solid ${props.theme.colors[
      props.color
    ] || props.color};`;
    return props.invertY
      ? `border-bottom: ${border}; bottom: 0;`
      : `border-top: ${border};`;
  }}

  ${props => {
    const border = `${props.width[0]} solid transparent;`;
    return props.invertX
      ? `border-left: ${border}; right: 0;`
      : `border-right: ${border};`;
  }}


  @media only screen and (min-width: 768px) {
    ${props =>
      props.invertY
        ? `border-bottom-width: ${props.height[1]};`
        : `border-top-width: ${props.height[1]};`}

    /* stupid and sexy prettier stop breaking my styled-component */
    
    ${props =>
      props.invertX
        ? `border-left-width: ${props.width[1]};`
        : `border-right-width: ${props.width[1]};`}
    
  }
`;

export default Triangle;
