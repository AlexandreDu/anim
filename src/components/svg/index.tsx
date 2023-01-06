import { useEffect } from 'react';
import * as Styled from './styles';
import { useTheme } from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';

export function HomeSvg({
  onAnimationsCompleted,
}: {
  onAnimationsCompleted?: () => void;
}) {
  const theme = useTheme();
  const edgeControls = useAnimationControls();
  const circleControls = useAnimationControls();
  const rectControls = useAnimationControls();
  const lineControls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await circleControls.start({
        pathLength: 1.1,
        transition: { delay: 0.5, ease: 'easeInOut', duration: 1 },
      });

      await rectControls.start({
        x: 0,
        pathLength: 1.1,
        transition: { ease: 'easeInOut', duration: 1 },
      });
      await rectControls.start({
        fill: '#72f',
        transition: { ease: 'easeInOut', duration: 1 },
      });
      await rectControls.start({
        height: 88,
        transition: { ease: 'easeInOut', duration: 1 },
      });
      await lineControls.start((i) => {
        return {
          pathLength: 1.1,
          transition: { ease: 'easeInOut', duration: 1, delay: i * 0.5 },
        };
      });
      await edgeControls.start({
        pathLength: 1.1,
        transition: { ease: 'easeInOut', duration: 1 },
      });

      onAnimationsCompleted && onAnimationsCompleted();
    };
    sequence();
  }, [
    circleControls,
    edgeControls,
    lineControls,
    rectControls,
    onAnimationsCompleted,
  ]);

  return (
    <Styled.Svg>
      <motion.path
        initial={{ pathLength: 0 }}
        animate={edgeControls}
        d="M0 0 L100 0 L100 100 L0 100 L 0 0"
      />
      <motion.circle
        stroke={'#c1b'}
        strokeWidth={1}
        initial={{ pathLength: 0 }}
        animate={circleControls}
        r="25"
        cx="30"
        cy="30"
      />
      <motion.rect
        x="60"
        y="6"
        stroke={theme.colors.text}
        initial={{
          width: 30,
          height: 30,
          pathLength: 0,
          x: 20,
          fill: theme.colors.background,
        }}
        animate={rectControls}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
      />
      <motion.path
        custom={0}
        stroke={'#5b9fad'}
        initial={{ pathLength: 0 }}
        animate={lineControls}
        d="M 10 62 H50"
      />
      <motion.path
        custom={1}
        stroke={'#5b9fad'}
        initial={{ pathLength: 0 }}
        animate={lineControls}
        d="M 10 78 H50"
      />
      <motion.path
        custom={2}
        stroke={'#5b9fad'}
        initial={{ pathLength: 0 }}
        animate={lineControls}
        d="M 10 94 H50"
      />
    </Styled.Svg>
  );
}
