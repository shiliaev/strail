import clsx from "clsx";
import React, {ReactNode, ElementType, useRef} from "react";
import { Box, PolymorphicComponentProps } from "react-polymorphic-box";
import {Ripple} from "../Ripple/Ripple";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

export interface ButtonOwnProps {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  left?: ReactNode;
  right?: ReactNode;
}

const defaultElement = "button";
export type ButtonProps<E extends ElementType = typeof defaultElement> =
  PolymorphicComponentProps<E, ButtonOwnProps>;
export function Button<E extends ElementType = typeof defaultElement>({
  className,
  children,
  disabled,
  size = ButtonSize.medium,
  variant = ButtonVariant.primary,
  left,
  right,
  ...props
}: ButtonProps<E>) {
  const boxRef = useRef(null);

  return (
    <Box
      ref={boxRef}
      as={defaultElement}
      className={clsx(className, "sl-Button", {
        "sl-Button_disabled": disabled,
        [`sl-Button_variant_${variant}`]: variant,
        [`sl-Button_size_${size}`]: size,
      })}
      {...props}
    >
      <Ripple containerRef={boxRef} />
      {left && <span data-testid={"Button__left"}>{left}</span>}
      <span data-testid={"Button__children"}>{children}</span>
      {right && <span data-testid={"Button__right"}>{right}</span>}
    </Box>
  );
}

Button.Size = ButtonSize;
Button.Variant = ButtonVariant;
