import { useEffect } from 'react';
import * as Styled from './styles';
import { useTheme } from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';

export function Svg({
  animationsCompleted,
}: {
  animationsCompleted?: () => void;
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
        console.log('i', i);
        return {
          pathLength: 1.1,
          transition: { ease: 'easeInOut', duration: 1, delay: i * 0.5 },
        };
      });
      await edgeControls.start({
        pathLength: 1.1,
        transition: { ease: 'easeInOut', duration: 1 },
      });

      animationsCompleted && animationsCompleted();
    };
    sequence();
  }, [
    circleControls,
    edgeControls,
    lineControls,
    rectControls,
    animationsCompleted,
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
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        animate={circleControls}
        r="25"
        cx="30"
        cy="30"
      />
      <motion.rect
        // stroke={'#ef270a'}
        x="60"
        y="6"
        initial={{
          width: 30,
          height: 30,
          pathLength: 0,
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
        // initial={{ pathLength: 0 }}
        // animate={lineControls}
        d="M 10 94 H50"
        // transition={{ duration: 1, ease: 'easeInOut', delay: 3 }}
      />

      {/* <motion.polygon
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1.1 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
        stroke={'#5b9fad'}
        points="20,90 30,70 40,90"
      /> */}
    </Styled.Svg>
  );
}
