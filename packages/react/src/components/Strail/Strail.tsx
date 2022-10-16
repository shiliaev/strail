import clsx from "clsx";
import { ReactNode, ComponentPropsWithoutRef, useState, useMemo } from "react";
import { StrailTheme, StrailThemeContext } from "./StrailThemeContext";

export type DivPropsWithoutRef = ComponentPropsWithoutRef<"div">;
export interface StrailProps extends DivPropsWithoutRef {
  children?: ReactNode;
}

export function Strail({ className, children, ...props }: StrailProps) {
  const [theme, setTheme] = useState<StrailTheme>("light");
  const providerValue = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <StrailThemeContext.Provider value={providerValue}>
      <div
        className={clsx(className, "sl-Strail", {
          [`sl-Strail_theme_${theme}`]: theme,
        })}
        {...props}
      >
        {children}
      </div>
    </StrailThemeContext.Provider>
  );
}
