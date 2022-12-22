import * as Styled from './styles';

const navItems = ['Motion', 'Handshake', 'Guides', 'API Documentation'];

export const Navigation: React.FC = () => {
  return (
    <Styled.Navigation>
      <Styled.NavList>
        {navItems.map((navItem) => (
          <li key={navItem}>{navItem}</li>
        ))}
      </Styled.NavList>
    </Styled.Navigation>
  );
};
