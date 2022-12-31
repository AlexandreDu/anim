import styled from 'styled-components';

export const switchHeight = '2.2rem';

export const Switch = styled.div<{ $on: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$on ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
  width: 3.5rem;
  height: ${switchHeight};
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
`;

export const Ball = styled.div<{ $on: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 95%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  z-index: 20;
`;
