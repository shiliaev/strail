import clsx from 'clsx';
import {ElementType, ReactNode} from 'react'
import {Box, PolymorphicComponentProps} from 'react-polymorphic-box';
import {Typography, TypographyVariant} from "../Typography";

export enum CardSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export enum CardVariant {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
}

export interface CardOwnProps {
    className?: string;
    title?: ReactNode;
    children?: ReactNode;
    size?: CardSize;
    variant?: CardVariant;
}

const defaultElement = 'div';

export type CardProps<E extends ElementType = typeof defaultElement> = PolymorphicComponentProps<E, CardOwnProps>;
export function Card<E extends ElementType = typeof defaultElement>({
                                                                                     className,
                                                                                     children,
                                                                                     size = CardSize.medium,
                                                                                     title,
                                                                                     variant = CardVariant.primary,
                                                                                     ...props
                                                                                 }: CardProps<E>) {
    return (<Box
        className={clsx(className, 'sl-Card', {
            [`sl-Card_size_${size}`]: size,
            [`sl-Card_size_${variant}`]: variant,
        })}
        {...props}
    >
        {title && <Typography className={'sl-Card__title'} variant={TypographyVariant.Heading2}>{title}</Typography>}
        {children}
    </Box>)
}
