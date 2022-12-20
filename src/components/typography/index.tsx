import type {
  TypographyStyleProps,
  TextElement,
  TypographyProps,
  PolymorphicComponentProps,
} from '../../types';
import { Text, TextColor } from '../../enum';

const textElementMap: Record<
  Text,
  { fontSize: string; color: TextColor; fontWeight: 400 | 700 }
> = {
  [Text.h1]: {
    fontSize: '2.875rem',
    color: TextColor.white,
    fontWeight: 700,
  },
  [Text.h2]: {
    fontSize: '2.5rem',
    color: TextColor.white,
    fontWeight: 700,
  },
  [Text.h3]: {
    fontSize: '2rem',
    color: TextColor.white,
    fontWeight: 700,
  },
  [Text.p]: {
    fontSize: '1.5rem',
    color: TextColor.white,
    fontWeight: 400,
  },
  [Text.span]: {
    fontSize: '1.5rem',
    color: TextColor.white,
    fontWeight: 400,
  },
};

const colorMap: Record<TextColor, string> = {
  [TextColor.white]: '#ffffff',
  [TextColor.black]: '#000000',
};

export const Typography = <T extends TextElement>({
  children,
  as,
  variant,
  color,
  ...otherProps
}: PolymorphicComponentProps<T, TypographyProps>) => {
  const TagName: TextElement = as;

  let style: TypographyStyleProps = {
    style: {
      fontSize: textElementMap[Text[as]].fontSize,
      color: textElementMap[Text[as]].color,
    },
  };

  style = variant
    ? {
        style: {
          fontSize: textElementMap[variant].fontSize,
          color: textElementMap[variant].color,
        },
      }
    : style;

  style.style.color = color ? (style.style.color = colorMap[color]) : '';

  return (
    <>
      <TagName {...style} {...otherProps}>
        {children}
      </TagName>
    </>
  );
};
