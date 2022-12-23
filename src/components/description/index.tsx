import type { DescriptionProps, LinkProps } from '../../types';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useId } from 'react';

import * as Styled from './styles';
import { Typography } from '../typography';
import { Link } from '../link';

import { FadeInImage } from '../image';

const UL = styled.ul`
  list-style: none;
  padding-bottom: 1rem;

  > li {
    padding-top: 1rem;
  }
`;

export const Description: React.FC<DescriptionProps> = ({
  title,
  content,
  links,
  src,
}) => {
  return (
    <Styled.Description>
      <Typography as="h1">{title}</Typography>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography as="p">{content}</Typography>
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
      {src && <FadeInImage src={src} />}
    </Styled.Description>
  );
};
