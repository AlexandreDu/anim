import React from 'react';
import { Path } from 'react-router-dom';
import { TextColor, Text } from '../enum';

// theme 's breakpoints
export type BreakPoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Layout
export type LayoutProps = {
  children: JSX.Element;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

// MotionPage
export type MotionPageProps = React.PropsWithChildren;
// Image
export type ImageProps = {
  src: string;
};

// Typography
export type TypographyStyleProps = {
  style: {
    fontSize?: string;
    lineHeight?: string;
    color?: string;
  };
};

export type TypographyProps = {
  variant?: TextElement;
  color?: keyof typeof TextColor;
};

export type AsProp<T> = {
  as: T;
};
export type TextElement = keyof typeof Text;

export type PropsToOmit<T extends TextElement, P> = keyof (AsProp<T> & P);

// Link
type To = string | Partial<Path>;
export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  replace?: boolean;
  state?: any;
  to: To;
  reloadDocument?: boolean;
}

export type DescriptionProps = {
  title: React.ReactNode;
  content: string;
  links?: LinkProps[];
  linksColor?: string;
  src?: string;
  minHeightToSubstract?: string;
};

export type PolymorphicComponentProps<
  T extends TextElement,
  Props = Record<string, never>
> = React.PropsWithChildren<
  Props &
    AsProp<T> &
    Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>
>;

// Highlight
export type AnimatedHighlightProps = {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  children: React.ReactNode;
};

// Switch
export type SwitchProps = {
  on: boolean;
  setOn: React.Dispatch<React.SetStateAction<boolean>>;
  offIcon?: JSX.Element;
  onIcon?: JSX.Element;
};

type Direction = 'vertical' | 'horizontal';
export type Space = BreakPoints | 'none';

// Stack
export type StackProps = React.PropsWithChildren<{
  direction: Direction;
  space: Space;
}>;

// Spacer
export type SpacerProps = StackProps;
