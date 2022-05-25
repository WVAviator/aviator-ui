import { Theme } from "@emotion/react";
import { RecursivePartial } from "../types";
import deepMerge from "../utils/deepMerge";
import defaultTheme from "./defaultTheme";

/**
 * Use this function to create a valid theme object for use in your ThemeProvider. You will not be required to define all of the theme properties, but you will need to define at least one.
 * @param partialTheme A partial theme object. All properties defined in this object will override the matching property on the default theme. For information on all the theme properties, please reference the documentation.
 * @returns A valid theme object to be used as the theme prop in your ThemeProvider.
 */
const createTheme = (partialTheme: RecursivePartial<Theme>) => {
	const result = deepMerge(defaultTheme, partialTheme);

	return result;
};

export default createTheme;
