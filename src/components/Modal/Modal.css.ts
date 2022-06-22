import { css, Theme } from "@emotion/react";
import { useMemo } from "react";
import { useTheme } from "../../theme";

const useModalStyles = (color: keyof Theme["colors"]) => {
	const theme = useTheme();

	const baseStyle = useMemo(() => {
		return css`
			background-color: ${theme.colors[color]};
			width: 100px;
			height: 100px;
		`;
	}, [theme]);

	return { baseStyle };
};

export default useModalStyles;
