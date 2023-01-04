import type { MotionPageProps } from '../../types';

import { motion } from 'framer-motion';

import { useMedia } from '../../hooks/useMedia';

import { Spacer } from '../spacer';

export function MotionPage({ children }: MotionPageProps) {
  const mdAndUp = useMedia('md');
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Spacer direction="vertical" space={mdAndUp ? 'none' : 'xl'} />
      {children}
    </motion.div>
  );
}
