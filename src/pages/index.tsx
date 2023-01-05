import { useState, useCallback } from 'react';

import styled from 'styled-components';

import { AnimatedPage } from '../components/animatedPage';
import { AnimatedTitles } from '../components/animatedTitles';
import { Svg } from '../components/svg';

const SvgWrapper = styled.div`
  align-self: center;
  flex-grow: 1;
  display: flex;
  flex-direction: columns;
  justify-content: space-evenly;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 85%;
  }
  @media (min-width: ${({ theme }) =>
      theme.breakpoints.lg}) and (max-height: 800px) {
    width: 45%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: 45%;
  }
`;

export function Home() {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const changeTitle = useCallback(() => {
    setIsAnimationCompleted(true);
  }, []);
  return (
    <AnimatedPage>
      <AnimatedTitles
        titleOne="Abstract."
        titleTwo="Artworks."
        showSecondTitle={isAnimationCompleted}
      />
      <SvgWrapper>
        <Svg animationsCompleted={changeTitle} />
      </SvgWrapper>
    </AnimatedPage>
  );
}
