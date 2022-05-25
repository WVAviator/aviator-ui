import { useTheme as useEmotionTheme } from "@emotion/react";
import defaultTheme from "./defaultTheme";

/**
 * A React hook that will return the current theme for use in your components.
 * @returns The theme object defined by the current ThemeProvider context, or the default AviatorUI theme if no ThemeProvider context exists.
 */
const useTheme = () => {
	const theme = useEmotionTheme();
	return Object.keys(theme).length === 0 ? defaultTheme : theme;
};

export default useTheme;
