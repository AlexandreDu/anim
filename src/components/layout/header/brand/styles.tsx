import styled from 'styled-components';
export const Brand = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #474747 solid;
  position: relative;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
