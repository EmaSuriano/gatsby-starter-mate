import { Theme } from '@rebass/preset';
import styled from 'styled-components';

type Props = {
  query: keyof Theme['queries'];
};

const Hide = styled.div<Props>`
  ${({ query, theme }) => ({
    [theme.queries[query]]: {
      display: 'none',
    },
  })}
`;

export default Hide;
