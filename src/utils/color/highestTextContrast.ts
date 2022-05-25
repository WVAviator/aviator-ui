/**
 * Determines which color will provide the highest contrast on the given background.
 * @param bgColor The background color in hex format.
 * @param lightColor The lighter of the two colors to compare.
 * @param darkColor The darker of the two colors to compare.
 * @returns Either lightColor or darkColor, whichever provides the highest contrast on the given background.
 */
const highestTextContrast = (
	bgColor: string,
	lightColor: string,
	darkColor: string
) => {
	const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
	const r = parseInt(color.substring(0, 2), 16); // hexToR
	const g = parseInt(color.substring(2, 4), 16); // hexToG
	const b = parseInt(color.substring(4, 6), 16); // hexToB
	const uicolors = [r / 255, g / 255, b / 255];
	const c = uicolors.map(col => {
		if (col <= 0.03928) {
			return col / 12.92;
		}
		return Math.pow((col + 0.055) / 1.055, 2.4);
	});
	const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
	return L > 0.179 ? darkColor : lightColor;
};

export default highestTextContrast;
