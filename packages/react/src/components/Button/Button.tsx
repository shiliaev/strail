import clsx from 'clsx';
import { ReactNode, ElementType } from 'react'
import {Box, PolymorphicComponentProps} from 'react-polymorphic-box';

export enum ButtonSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
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

export type ButtonProps<
    E extends ElementType
    > = PolymorphicComponentProps<E, ButtonOwnProps>;

const defaultElement = 'button';

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
    return <Box
            as={defaultElement}
            className={clsx(className, 'sl-Button', {
                'sl-Button_disabled': disabled,
                [`sl-Button_variant_${variant}`]: variant,
                [`sl-Button_size_${size}`]: size,
            })}
            {...props}
            >
            {left && <span data-testid={'Button__left'}>
                {left}
            </span>}
            <span data-testid={'Button__children'}>
                {children}
            </span>
            {right && <span data-testid={'Button__right'}>
                {right}
            </span>}
        </Box>
}

Button.Size = ButtonSize;
Button.Variant = ButtonVariant;
