import clsx from "clsx";
import { ElementType, ReactNode } from "react";
import { Box, PolymorphicComponentProps } from "react-polymorphic-box";
import { Typography, TypographyVariant } from "../Typography";

export enum PlateVariant {
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger",
}

export interface PlateOwnProps {
  title?: ReactNode;
  className?: string;
  children?: ReactNode;
  variant?: PlateVariant;
}

export type PlateProps<E extends ElementType = typeof defaultElement> =
  PolymorphicComponentProps<E, PlateOwnProps>;

const defaultElement = "div";

export function Plate<E extends ElementType = typeof defaultElement>({
  title,
  className,
  children,
  variant = PlateVariant.info,
  ...props
}: PlateProps<E>) {
  return (
    <Box
      className={clsx(className, "sl-Plate", {
        [`sl-Plate_variant_${variant}`]: variant,
      })}
      {...props}
    >
      {title && (
        <Typography
          className={"sl-Plate__title"}
          variant={TypographyVariant.Heading2}
        >
          {title}
        </Typography>
      )}
      <div className={"sl-Plate__content"}>{children}</div>
    </Box>
  );
}
