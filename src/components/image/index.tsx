import * as Styled from './styles';
import type { ImageProps } from '../../types';
import { motion } from 'framer-motion';

export function Image({ src }: ImageProps) {
  return <Styled.Image src={src} alt={src} />;
}
const MotionImage = motion(Styled.Image);

export function FadeInImage({ src }: ImageProps) {
  return (
    <Styled.ImageWrapper>
      <MotionImage
        src={src}
        alt={src}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1.25,
        }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
      />
    </Styled.ImageWrapper>
  );
}
