import { hexToRGB, rgbToHex } from "./colorUtils";

/**
 * Shades a color by a percentage.
 *
 * @param color The color to shade in hex format.
 * @param percentage The percentage of the color spectrum to shade the color by, in decimal format. Positive values will lighten the color, negative values will darken it.
 * @returns The hex value of the shaded color. The color will be clamped between #000000 and #FFFFFF.
 */
const shadeColor = (color: string, percentage: number) => {
	const rgb = hexToRGB(color);
	const shadedRGB = {
		r: shadeComponent(rgb.r, percentage),
		g: shadeComponent(rgb.g, percentage),
		b: shadeComponent(rgb.b, percentage),
	};
	return rgbToHex(shadedRGB);
};

const shadeComponent = (component: number, percentage: number) => {
	const shaded = Math.ceil(component + 255 * percentage);
	return Math.min(255, Math.max(0, shaded));
};

export default shadeColor;
