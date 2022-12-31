import styled from 'styled-components';
export const Description = styled.div<{ minHeightToSubstract?: string }>`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    scroll-snap-align: center;
    min-height: calc(
      100vh -
        ${({ minHeightToSubstract }) =>
          minHeightToSubstract ? minHeightToSubstract : '0vh'}
    );
  }
  border: 1px solid red;
  display: flex;
  align-items: center;
`;
