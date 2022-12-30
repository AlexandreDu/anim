import type {
  TypographyStyleProps,
  TextElement,
  TypographyProps,
  PolymorphicComponentProps,
} from '../../types';

import { useTheme } from 'styled-components';

import { Text, TextColor } from '../../enum';

const colorMap: Record<TextColor, string> = {
  [TextColor.white]: '#ffffff',
  [TextColor.black]: '#000000',
};

export function Typography<T extends TextElement>({
  children,
  as,
  variant,
  color,
  ...otherProps
}: PolymorphicComponentProps<T, TypographyProps>) {
  const theme = useTheme();

  const textElementMap: Record<
    Text,
    {
      fontSize: string;
      lineHeight: string;
      color: string;
      fontWeight: 400 | 700;
    }
  > = {
    [Text.h1]: {
      fontSize: theme.fontSizes.xl,
      lineHeight: theme.lineHeights.xl,
      color: theme.colors.text,
      fontWeight: 700,
    },
    [Text.h2]: {
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.lineHeights.lg,
      color: theme.colors.text,
      fontWeight: 700,
    },
    [Text.h3]: {
      fontSize: theme.fontSizes.md,
      lineHeight: theme.lineHeights.md,
      color: theme.colors.text,
      fontWeight: 700,
    },
    [Text.p]: {
      fontSize: theme.fontSizes.sm,
      lineHeight: theme.lineHeights.sm,
      color: theme.colors.text,
      fontWeight: 400,
    },
    [Text.span]: {
      fontSize: theme.fontSizes.sm,
      lineHeight: theme.lineHeights.sm,
      color: theme.colors.text,
      fontWeight: 400,
    },
  };
  const TagName: TextElement = as;

  let style: TypographyStyleProps = {
    style: {
      fontSize: textElementMap[Text[as]].fontSize,
      lineHeight: textElementMap[Text[as]].lineHeight,
      color: textElementMap[Text[as]].color,
    },
  };

  style = variant
    ? {
        style: {
          fontSize: textElementMap[variant].fontSize,
          lineHeight: textElementMap[variant].lineHeight,
          color: textElementMap[variant].color,
        },
      }
    : style;
  if (color) style.style.color = style.style.color = colorMap[color];

  return (
    <>
      <TagName {...style} {...otherProps}>
        {children}
      </TagName>
    </>
  );
}
