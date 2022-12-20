import type { DescriptionProps, LinkProps } from '../../types';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useId } from 'react';

import { Typography } from '../typography';
import { Link } from '../link';

const UL = styled.ul`
  list-style: none;
`;

export const Description: React.FC<DescriptionProps> = ({
  title,
  content,
  links,
}) => {
  return (
    <div>
      <Typography as="h1">{title}</Typography>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Typography color="white" as="p">
          {content}
        </Typography>
      </motion.div>
      <UL>
        {links?.map(({ to, children }) => {
          const id = useId();
          return (
            <li key={id}>
              <Link to={to}>{children}</Link>
            </li>
          );
        })}
      </UL>
    </div>
  );
};
