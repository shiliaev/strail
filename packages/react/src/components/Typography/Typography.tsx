import clsx from 'clsx';
import {ReactNode} from 'react'
import {Box, PolymorphicComponent} from 'react-polymorphic-box';

export enum TypographyVariant {
    Heading1 = 'Heading1',
    Heading2 = 'Heading2',
    Heading3 = 'Heading3',
    Heading4 = 'Heading4'
}


export interface TypographyProps {
    className?: string;
    children?: ReactNode;
    variant?: TypographyVariant;
}

const defaultElement = 'div';

export const Typography: PolymorphicComponent<TypographyProps, typeof defaultElement> = ({
                                                                                             className,
                                                                                             children,
                                                                                             variant,
                                                                                             ...props
                                                                                         }: TypographyProps) => {
    return <Box className={clsx(className, 'sl-Typography', {
        [`sl-Typography_variant_${variant}`]: variant
    })} {...props}>
        {children}
    </Box>
}
