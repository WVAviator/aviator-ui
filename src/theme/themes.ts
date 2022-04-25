import { Theme } from "./themeTypes";

export const light: Theme = {
	colors: {
		background: {
			primary: {
				light: "#fafafa",
				medium: "#d9d9d9",
				dark: "#b0b0b0",
			},
			secondary: {
				light: "#ffffff",
				medium: "#fafafa",
				dark: "#d9d9d9",
			},
			text: {
				light: "#000000",
				medium: "#000000",
				dark: "#000000",
			},
		},
		foreground: {
			primary: {
				light: "#FFED95",
				medium: "#F9CF00",
				dark: "#CAA800",
			},
			secondary: {
				light: "#FFCA96",
				medium: "#F19F4D",
				dark: "#BA5D00",
			},
			text: { light: "#FFF", medium: "#FFF", dark: "#FFF" },
		},
		accent: {
			primary: {
				light: "#8EB7E7",
				medium: "#4484CE",
				dark: "#1061BE",
			},
			secondary: {
				light: "#FFCA96",
				medium: "#F19F4D",
				dark: "#BA5D00",
			},
			text: { light: "#FFF", medium: "#FFF", dark: "#FFF" },
		},
	},
};

export const dark: Theme = {
	colors: {
		background: {
			primary: {
				light: "#313131",
				medium: "#121212",
				dark: "#000000",
			},
			secondary: {
				light: "#5F6B79",
				medium: "#364454",
				dark: "#151E27",
			},
			text: {
				light: "#ffffff",
				medium: "#ffffff",
				dark: "#ffffff",
			},
		},
		foreground: {
			primary: {
				light: "#FFED95",
				medium: "#F9CF00",
				dark: "#CAA800",
			},
			secondary: {
				light: "#FFCA96",
				medium: "#F19F4D",
				dark: "#BA5D00",
			},
			text: { light: "#FFF", medium: "#FFF", dark: "#FFF" },
		},
		accent: {
			primary: {
				light: "#8EB7E7",
				medium: "#4484CE",
				dark: "#1061BE",
			},
			secondary: {
				light: "#FFCA96",
				medium: "#F19F4D",
				dark: "#BA5D00",
			},
			text: { light: "#FFF", medium: "#FFF", dark: "#FFF" },
		},
	},
};
