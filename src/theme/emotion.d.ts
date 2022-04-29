import "@emotion/react";

declare module "@emotion/react" {
	export interface Theme {
		colors: {
			primary: string;
			secondary: string;
			tertiary: string;

			background: string;
			foreground: string;

			textLight: string;
			textDark: string;
		};
	}
}
