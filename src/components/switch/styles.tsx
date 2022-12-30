import styled from 'styled-components';
//
export const Switch = styled.div<{ $on: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$on ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
  width: 3.5rem;
  height: auto;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const OffIconWrapper = styled.div<{ $on: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.background};
  width: 1.5rem;
  height: 1.5rem;
`;

export const Ball = styled.div<{ $on: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  z-index: 20;
`;
