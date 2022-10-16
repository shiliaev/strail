import {createContext} from "react";

export type StrailTheme = 'light' | 'dark';

export interface StrailThemeContext {
    theme: StrailTheme;
    setTheme: (newTheme: StrailTheme) => void;
}

export const StrailThemeContext = createContext<StrailThemeContext>({
    theme: 'light',
    setTheme: (newTheme: StrailTheme) => {}
});
