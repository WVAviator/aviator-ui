import { Theme } from "../types";
import ThemeContext from "./ThemeContext";
import { light } from "./themes";

interface ThemeProviderProps {
	theme?: Theme;
	children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
	theme = light,
	children,
}) => {
	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
