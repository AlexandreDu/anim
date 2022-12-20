import { Path } from 'react-router-dom';

import { TextColor, Text } from '../enum';

// Typography
export type TypographyStyleProps = {
  style: {
    fontSize?: string;
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
};

export type PolymorphicComponentProps<
  T extends TextElement,
  Props = {}
> = React.PropsWithChildren<
  Props &
    AsProp<T> &
    Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>
>;
