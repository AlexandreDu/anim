import * as Styled from './styles';
import { UL } from '../ui/styles';

export function Anchors({
  list,
  currentAnchor,
}: {
  list: { label: string; id: string }[];
  currentAnchor: string;
}) {
  return (
    <Styled.Anchors>
      <UL>
        {list.map(({ label, id }) => {
          const isCurrentAnchor = currentAnchor === id;
          return (
            <Styled.Anchor key={id} isCurrentAnchor={isCurrentAnchor}>
              {label}
            </Styled.Anchor>
            // <li key={id} style={{ color: isCurrentAnchor ? 'red' : 'white' }}>
            //   {label}
            // </li>
          );
        })}
      </UL>
    </Styled.Anchors>
  );
}
