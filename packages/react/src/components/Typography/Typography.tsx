import clsx from 'clsx';
import {ElementType, ReactNode} from 'react';

export enum TypographyVariant {
    Heading1 = 'Heading1',
    Heading2 = 'Heading2',
    Heading3 = 'Heading3',
    Heading4 = 'Heading4'
}

export interface TypographyProps {
    className?: string;
    children?: ReactNode;
    variant: TypographyVariant;
}

const mapVariantToElementType: Record<TypographyVariant, ElementType> = {
    [TypographyVariant.Heading1]: 'h1',
    [TypographyVariant.Heading2]: 'h2',
    [TypographyVariant.Heading3]: 'h3',
    [TypographyVariant.Heading4]: 'h4',
}

export function Typography({
                                                                                             className,
                                                                                             children,
                                                                                             variant,
                                                                                             ...props
                                                                                         }: TypographyProps) {
    const Component = mapVariantToElementType[variant];

    return <Component
        className={clsx(className, 'sl-Typography', {
        [`sl-Typography_variant_${variant}`]: variant
    })} {...props}>
        {children}
    </Component>
}
