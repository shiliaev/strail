import clsx from "clsx";
import type { ElementType } from "react";
import { PolymorphicComponentProps } from "react-polymorphic-box";

export enum IconSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export interface IconOwnProps {
  icon: ElementType;
  className?: string;
  size?: IconSize;
}

const defaultElement = "div";

export type IconProps<E extends ElementType = typeof defaultElement> =
  PolymorphicComponentProps<E, IconOwnProps>;
export function Icon<E extends ElementType = typeof defaultElement>({
  icon,
  className,
  size = IconSize.medium,
  ...props
}: IconProps<E>) {
  const Component = icon;

  return (
    <Component
      className={clsx(className, "sl-Icon", {
        [`sl-Icon_size_${size}`]: size,
      })}
      {...props}
    />
  );
}
