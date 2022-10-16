import clsx from 'clsx';
import {ReactNode, ComponentPropsWithoutRef, useState} from "react";
import {StrailTheme, StrailThemeContext} from "./StrailThemeContext";

export type DivPropsWithoutRef = ComponentPropsWithoutRef<'div'>;
export interface StrailProps extends DivPropsWithoutRef {
    children?: ReactNode;
}

export function Strail({className, children, ...props}: StrailProps) {
    const [theme, setTheme] = useState<StrailTheme>('light');

    return <StrailThemeContext.Provider value={{ theme, setTheme }}>
        <div className={clsx(className, 'sl-Strail', {
            [`sl-Strail_theme_${theme}`]: theme,
        })} {...props}>
            {children}
        </div>
    </StrailThemeContext.Provider>
}
