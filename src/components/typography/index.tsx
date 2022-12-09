import styled from "styled-components";

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);

type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

type TypographyProps = {
  color?: string;
};

const StyledTypography = styled.h1<{ as: keyof JSX.IntrinsicElements }>`
  font-size: 2.5rem;

  ${({ as }) => {
    console.log("as", as);
    switch (as) {
      case "h1":
        return `
            font-size: 3rem;
        `;
      case "p":
        return `
            font-size: 1.5rem;
            line-height: 2.5rem;
        `;

      default:
        return ``;
    }
  }}
`;

export const Typography = <T extends React.ElementType>({
  children,
  as,
  ...rest
}: PolymorphicComponentProps<T, TypographyProps>) => {
  return (
    <StyledTypography as={as} {...rest}>
      {children}
    </StyledTypography>
  );
};
