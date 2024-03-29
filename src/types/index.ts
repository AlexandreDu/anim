import React, { PropsWithChildren } from 'react';
import { Path } from 'react-router-dom';
import { TextColor, Text } from '../enum';

type Id = string;
type StaticTitle = string;
type AnimatedTitle = string;
// theme
export type BaseTheme = {
  breakpoints: { [key in BreakPoints]: string };
  space: {
    [key in Space]: string;
  };
  fonts: {
    [key: string]: string;
  };
  fontSizes: { [key: string]: string };
  lineHeights: { [key: string]: string };
};

// theme 's breakpoints
export type BreakPoints = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// ThemesProvider
export type ThemesProviderProps = PropsWithChildren;

// useLocalStorage
export type UseLocalStorageProps<T> = {
  key: string;
  initialValue: T;
};
// useAnchors
export type useAnchorsProps = {
  staticTitle: StaticTitle;
  animatedTitle: AnimatedTitle;
  id: Id;
  [key: string]: unknown;
}[];

// Layout
export type LayoutProps = PropsWithChildren;

// MotionPage
export type MotionPageProps = PropsWithChildren<{
  spacerTopDisabled?: boolean;
}>;
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
  state?: unknown;
  to: To;
  reloadDocument?: boolean;
}

export type NavLinkProps = LinkProps;

export type DescriptionsListProps = {
  list: {
    staticTitle: StaticTitle;
    animatedTitle: AnimatedTitle;
    colorOne: string;
    colorTwo: string;
    colorThree: string;
    content: string;
    links?: {
      children: string;
      to: string;
    }[];
    linksColor: string;
    src?: string;
    id: Id;
  }[];
  isLastItemBeforeFooter?: boolean;
  setCurrentAnchor: React.Dispatch<React.SetStateAction<string>>;
};

export type DescriptionProps = {
  title: React.ReactNode;
  content: string;
  links?: LinkProps[];
  linksColor?: string;
  src?: string;
  id: Id;
  setCurrentAnchor: React.Dispatch<React.SetStateAction<string>>;
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
  setOn: () => void;
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
