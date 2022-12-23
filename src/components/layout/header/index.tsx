import React from 'react';
import styled from 'styled-components';
import { Brand } from './brand';
import { Navigation } from './navigation';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  transition: all 0.5s;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Brand />
      <Navigation />
    </StyledHeader>
  );
};
