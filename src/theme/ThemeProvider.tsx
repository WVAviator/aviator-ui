import {
	Theme,
	ThemeProvider as EmotionThemeProvider,
	ThemeProviderProps as EmotionThemeProviderProps,
} from "@emotion/react";
import React from "react";

interface ThemeProviderProps extends EmotionThemeProviderProps {
	/**
	 * The theme that will be applied to any AviatorUI components rendered in this context.
	 */
	theme: Theme;
}

/**
 * Wrap your application in this ThemeProvider component to change the theme of all nested AviatorUI components. Use the createTheme function to create a new theme and assign it to the theme prop.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
	return (
		<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
	);
};

export default ThemeProvider;
