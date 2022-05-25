import shadeColor from "./shadeColor";

describe("shadeColor", () => {
	it("lightens a dark color", () => {
		const color = "#000000";
		const amount = 0.1;

		expect(shadeColor(color, amount)).toBe("#1A1A1A");
	});

	it("darkens a light color", () => {
		const color = "#FFFFFF";
		const amount = -0.1;

		expect(shadeColor(color, amount)).toBe("#E6E6E6");
	});

	it("won't darken a color past pure black", () => {
		const color = "#1A1A1A";
		const amount = -0.2;

		expect(shadeColor(color, amount)).toBe("#000000");
	});

	it("won't lighten a color past pure white", () => {
		const color = "#E6E6E6";
		const amount = 0.2;

		expect(shadeColor(color, amount)).toBe("#FFFFFF");
	});
});
