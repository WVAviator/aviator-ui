export interface ColorScheme {
	background: Palette;
	foreground: Palette;
	accent: Palette;
}
export interface Palette {
	primary: Color;
	secondary: Color;
	text: Color;
}

export interface Color {
	light: string;
	medium: string;
	dark: string;
}

export interface Theme {
	colors: ColorScheme;
}
