import { SerializedStyles } from "@emotion/react";

export interface CompoundStyle {
	[key: string]: SerializedStyles;
}

export interface Theme {
	colors: {
		primary: string;
		secondary: string;
	};
	fontColors: {
		primary: string;
		secondary: string;
	};
}
