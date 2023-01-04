import styled from 'styled-components';

export const UL = styled.ul`
  list-style: none;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > * {
      flex: 0 1 50%;
    }
    & > *:not(:last-child) {
      margin-right: ${({ theme }) => theme.space.md};
    }
  }
`;

export const ScrollSnapWrapper = styled.div<{ minHeightToSubstract?: string }>`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    scroll-snap-align: start;
    min-height: calc(
      100vh -
        ${({ minHeightToSubstract }) =>
          minHeightToSubstract ? minHeightToSubstract : '0vh'}
    );
  }
`;
