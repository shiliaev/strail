import { StrailThemeContext } from "../components";
import { useContext } from "react";

export function useTheme() {
  return useContext(StrailThemeContext);
}
