import { AnimatePresence, motion } from 'framer-motion';

import { Typography } from '../typography';

export function AnimatedTitles({
  titleOne,
  titleTwo,
  showSecondTitle,
}: {
  titleOne: string;
  titleTwo: string;
  showSecondTitle: boolean;
}) {
  return (
    <AnimatePresence mode="wait">
      {showSecondTitle ? (
        <motion.div
          key="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.25 }}
        >
          <Typography as="h1">{titleTwo}</Typography>
        </motion.div>
      ) : (
        <motion.div
          key="0"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.25 }}
        >
          <Typography as="h1">{titleOne}</Typography>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
