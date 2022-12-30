import * as Styled from './styles';
import { Brand } from './brand';
import { Navigation } from './navigation';

export function Header() {
  return (
    <Styled.Header>
      <Brand />
      <Navigation />
    </Styled.Header>
  );
}
