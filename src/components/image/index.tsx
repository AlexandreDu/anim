import * as Styled from './styles';
import type { ImageProps } from '../../types';

export function Image({ src }: ImageProps) {
  return <Styled.Image src={src} alt={src} />;
}

export function FadeInImage({ src }: ImageProps) {
  return (
    <Styled.ImageWrapper>
      <Styled.Image
        src={src}
        alt={src}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1.25,
        }}
        viewport={{ once: true, margin: '-25%' }}
        transition={{ ease: 'easeOut', duration: 0.75 }}
      />
    </Styled.ImageWrapper>
  );
}
