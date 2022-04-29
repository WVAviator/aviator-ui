import { useTheme } from "@emotion/react";
import defaultTheme from "./defaultTheme";

const useAviatorTheme = () => {
	const theme = useTheme();
	return Object.keys(theme).length === 0 ? defaultTheme : theme;
};

export default useAviatorTheme;
