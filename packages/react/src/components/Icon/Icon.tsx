import clsx from 'clsx';
import type { ElementType } from 'react'
import { PolymorphicComponent } from 'react-polymorphic-box';

export enum IconSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export interface IconProps {
    icon: ElementType;
    className?: string;
    size?: IconSize;
}

const defaultElement = 'div';

export const Icon: PolymorphicComponent<IconProps, typeof defaultElement> = ({
         icon,
         className,
         size = IconSize.medium,
         ...props
    }: IconProps) => {
    const Component = icon;

    return <Component
        className={clsx(className, 'sl-Icon', {
            [`sl-Icon_size_${size}`]: size,
        })}
      {...props}
    />
}
