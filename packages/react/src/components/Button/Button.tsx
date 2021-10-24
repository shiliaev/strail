import clsx from 'clsx';
import {ReactNode} from 'react'
import {Box, PolymorphicComponent} from 'react-polymorphic-box';

export enum ButtonSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
}

export interface ButtonProps {
    className?: string;
    children?: ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
}

const defaultElement = 'button';

export const Button: PolymorphicComponent<ButtonProps, typeof defaultElement> = ({
                                                                                     className,
                                                                                     children,
                                                                                     size = ButtonSize.medium,
                                                                                     variant = ButtonVariant.primary,
                                                                                     ...props
                                                                                 }: ButtonProps) => {
    return <Box className={clsx(className, 's-Button')} {...props}>
        {children}
    </Box>
}
