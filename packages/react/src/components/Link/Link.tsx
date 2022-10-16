import clsx from 'clsx';
import {ElementType, ReactNode} from 'react'
import {Box, PolymorphicComponent, PolymorphicComponentProps} from 'react-polymorphic-box';

export interface LinkOwnProps {
    className?: string;
    children?: ReactNode;
}
const defaultElement = 'a';
export type LinkProps<E extends ElementType = typeof defaultElement> = PolymorphicComponentProps<E, LinkOwnProps>;
export function Link<E extends ElementType = typeof defaultElement>({
                                                                                     className,
                                                                                     children,
                                                                                     ...props
                                                                                 }: LinkProps<E>) {
    return <Box as={defaultElement} className={clsx(className, 'sl-Link')} {...props}>
        {children}
    </Box>
}
