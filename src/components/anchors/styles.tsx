import styled from 'styled-components';

export const Anchors = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: fixed;
    top: 20%;
    right: 4%;
  }
`;

export const Anchor = styled.li<{ isCurrentAnchor: boolean }>`
  color: ${({ theme, isCurrentAnchor }) =>
    isCurrentAnchor ? '#c1b' : theme.colors.text};
`;
