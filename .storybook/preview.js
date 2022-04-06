import { ThemeProvider, light, dark } from "../src/Theme";
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
	// https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
	actions: { argTypesRegex: "^on.*" },
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={light}>
			<Story />
		</ThemeProvider>
	),
];
