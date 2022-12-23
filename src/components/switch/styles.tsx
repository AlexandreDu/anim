import styled from 'styled-components';

export const Container = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.darkMode ? 'end' : 'start')};
  width: 3.5rem;
  height: auto;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Ball = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 20;
`;
