import * as Styled from './styles';

export function Footer() {
  const currentDate = new Date().getFullYear();
  return <Styled.Footer>{currentDate}</Styled.Footer>;
}
