import type { DescriptionProps } from '../../types';

import { motion } from 'framer-motion';

import { useMedia } from '../../hooks/useMedia';

import * as Styled from './styles';
import { Flex, UL } from '../ui/styles';
import { Typography } from '../typography';
import { Link } from '../link';
import { Stack } from '../stack';

import { FadeInImage } from '../image';

export function Description({
  title,
  content,
  links,
  linksColor,
  src,
  minHeightToSubstract,
}: DescriptionProps) {
  const mdAndUp = useMedia('md');
  return (
    <Styled.Description minHeightToSubstract={minHeightToSubstract}>
      <Flex>
        <div>
          <Typography as='h1'>{title}</Typography>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography as='p' variant={mdAndUp ? 'h3' : 'p'}>
              {content}
            </Typography>
          </motion.div>
          <Stack direction='vertical' space='md'>
            <UL>
              <Stack direction='vertical' space='md'>
                {links?.map(({ to, children }, index) => {
                  return (
                    <li key={index}>
                      <Link color={linksColor} to={to}>
                        {children}
                      </Link>
                    </li>
                  );
                })}
              </Stack>
            </UL>
          </Stack>
        </div>
        <div>{src && <FadeInImage src={src} />}</div>
      </Flex>
    </Styled.Description>
  );
}
