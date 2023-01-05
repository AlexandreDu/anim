import type { MotionPageProps } from '../../types';

import { useMedia } from '../../hooks/useMedia';

import * as Styled from './styles';

import { Spacer } from '../spacer';

export function AnimatedPage({ children, spacerTopDisabled }: MotionPageProps) {
  const mdAndUp = useMedia('md');
  return (
    <Styled.MotionPage animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {!spacerTopDisabled && (
        <Spacer direction="vertical" space={mdAndUp ? 'none' : 'xl'} />
      )}
      {children}
    </Styled.MotionPage>
  );
}
