import { css, Theme } from "@emotion/react";
import { useMemo } from "react";
import { useTheme } from "../../theme";

const useModalStyles = (color: keyof Theme["colors"]) => {
	const theme = useTheme();

	const backdropStyle = useMemo(() => {
		return css`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #00000015;
		`;
	}, [theme]);

	const modalStyle = useMemo(() => {
		return css`
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			min-width: 80%;
			min-height: 80%;
			background-color: ${theme.colors[color]};
		`;
	}, [theme, color]);

	return { backdropStyle, modalStyle };
};

export default useModalStyles;
