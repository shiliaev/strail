import clsx from 'clsx';
import {ReactNode} from 'react'
import {Box, PolymorphicComponent} from 'react-polymorphic-box';

export interface LinkProps {
    className?: string;
    children?: ReactNode;
}

const defaultElement = 'a';

export const Link: PolymorphicComponent<LinkProps, typeof defaultElement> = ({
                                                                                     className,
                                                                                     children,
                                                                                     ...props
                                                                                 }: LinkProps) => {
    return <Box className={clsx(className, 'sl-Typography')} {...props}>
        {children}
    </Box>
}
