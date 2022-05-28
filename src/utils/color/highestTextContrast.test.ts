import highestTextContrast from "./highestTextContrast";

describe("highest text contrast", () => {
	it("shows white text on a black background", () => {
		const correctTextColor = "#FFFFFF";
		const incorrectTextColor = "#000000";
		const backgroundColor = "#000000";

		expect(
			highestTextContrast(
				backgroundColor,
				correctTextColor,
				incorrectTextColor
			)
		).toBe(correctTextColor);
	});

	it("shows black text on a white background", () => {
		const correctTextColor = "#000000";
		const incorrectTextColor = "#FFFFFF";
		const backgroundColor = "#FFFFFF";

		expect(
			highestTextContrast(
				backgroundColor,
				incorrectTextColor,
				correctTextColor
			)
		).toBe(correctTextColor);
	});

	it("picks the darker of two colors for a light background", () => {
		const correctTextColor = "#000000";
		const incorrectTextColor = "#010101";
		const backgroundColor = "#FFFFFF";

		expect(
			highestTextContrast(
				backgroundColor,
				incorrectTextColor,
				correctTextColor
			)
		).toBe(correctTextColor);
	});

	it("picks the lighter of two colors for a dark background", () => {
		const correctTextColor = "#FFFFFF";
		const incorrectTextColor = "#FAFAFA";
		const backgroundColor = "#000000";

		expect(
			highestTextContrast(
				backgroundColor,
				correctTextColor,
				incorrectTextColor
			)
		).toBe(correctTextColor);
	});
});
