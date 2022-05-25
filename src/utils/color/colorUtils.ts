export interface RGB {
	r: number;
	g: number;
	b: number;
}

export const hexToRGB = (hex: string) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	if (!result) return { r: 0, g: 0, b: 0 };
	return {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16),
	};
};

export const rgbToHex = (rgb: RGB) => {
	const r: string = componentToHex(rgb.r).toUpperCase();
	const g: string = componentToHex(rgb.g).toUpperCase();
	const b: string = componentToHex(rgb.b).toUpperCase();

	return "#" + r + g + b;
};

const componentToHex = (c: number) => {
	const hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
};
