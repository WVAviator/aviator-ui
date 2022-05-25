import {
	ThemeProvider as EmotionThemeProvider,
	ThemeProviderProps,
} from "@emotion/react";
import React from "react";

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
	return (
		<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
	);
};

export default ThemeProvider;
