import type { AnimatedHighlightProps } from '../../types';

import * as Styled from './styles';

export function AnimatedHighlight({
  children,
  colorOne,
  colorTwo,
  colorThree,
}: AnimatedHighlightProps) {
  return (
    <Styled.Highlight
      initial={{
        background: `linear-gradient(145deg, ${colorOne}, ${colorTwo})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        x: 20,
      }}
      whileInView={{
        background: `linear-gradient(145deg, ${colorTwo}, ${colorThree})`,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ ease: 'easeOut', duration: 0.75 }}
    >
      {children}
    </Styled.Highlight>
  );
}
