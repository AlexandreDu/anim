import type { MotionPageProps } from '../../types';

import { motion } from 'framer-motion';

export function MotionPage({ children }: MotionPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
