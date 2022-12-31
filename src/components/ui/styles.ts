import styled from 'styled-components';

export const UL = styled.ul`
  list-style: none;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    > * {
      flex: 0 1 50%;
    }
  }
`;
