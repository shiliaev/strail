import clsx from 'clsx';
import {ReactNode} from 'react'
import {Box, PolymorphicComponent} from 'react-polymorphic-box';

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

export interface CardProps {
    className?: string;
    children?: ReactNode;
    size?: CardSize;
    variant?: CardVariant;
}

const defaultElement = 'div';

export const Card: PolymorphicComponent<CardProps, typeof defaultElement> = ({
                                                                                     className,
                                                                                     children,
                                                                                     size = CardSize.medium,
                                                                                     variant = CardVariant.primary,
                                                                                     ...props
                                                                                 }: CardProps) => {
    return (<Box
        className={clsx(className, 'sl-Card', {
            [`sl-Card_size_${size}`]: size,
            [`sl-Card_size_${variant}`]: variant,
        })}
        {...props}
    >
        {children}
    </Box>)
}
