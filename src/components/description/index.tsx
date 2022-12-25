import type { DescriptionProps, LinkProps } from '../../types';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useId } from 'react';

import * as Styled from './styles';
import { Typography } from '../typography';
import { Link } from '../link';
import { Stack } from '../stack';

import { FadeInImage } from '../image';

const UL = styled.ul`
  list-style: none;`;

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
      <Stack direction='vertical' space='md'>
        <UL>
          <Stack direction='vertical' space='md'>
            {links?.map(({ to, children }) => {
              const id = useId();
              return (
                <li key={id}>
                  <Link to={to}>{children}</Link>
                </li>
              );
            })}
          </Stack>
        </UL>
        {src && <FadeInImage src={src} />}
      </Stack>
    </Styled.Description>
  );
};
