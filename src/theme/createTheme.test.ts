import createTheme from "./createTheme";
import defaultTheme from "./defaultTheme";

describe("createTheme", () => {
	it("updates to single nested parameters won't replace the whole nested object", () => {
		const theme = createTheme({
			colors: {
				primary: "#000000",
			},
		});

		expect(theme.colors.primary).toBe("#000000");
		expect(theme.colors.secondary).toBe(defaultTheme.colors.secondary);
	});
});
