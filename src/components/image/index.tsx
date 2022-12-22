import * as Styled from './styles';
import type { ImageProps } from '../../types';
import { motion } from 'framer-motion';

export const Image: React.FC<ImageProps> = ({ src }) => {
  return <Styled.Image src={src} alt={src} />;
};

const MotionImage = motion(Styled.Image);

export const FadeInImage: React.FC<ImageProps> = ({ src }) => {
  return (
    <Styled.ImageWrapper>
      <MotionImage
        src={src}
        alt={src}
        initial={{
          display: 'block',
          maxWidth: '100%',
          opacity: 0,
          height: '400px',
          objectFit: 'cover',
        }}
        whileInView={{
          display: 'block',
          maxWidth: '100%',
          opacity: 1,
          height: '400px',
          objectFit: 'cover',
          scale: 1.25,
        }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
      />
    </Styled.ImageWrapper>
  );
};
