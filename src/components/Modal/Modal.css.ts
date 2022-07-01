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
			backdrop-filter: blur(2px);
			background-color: rgba(0, 0, 0, 0.4);
			@supports not (backdrop-filter: blur(2px)) {
			}
		`;
	}, [theme]);

	const modalStyle = useMemo(() => {
		return css`
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
				rgba(0, 0, 0, 0.23) 0px 6px 6px;
			background-color: ${theme.colors[color]};
			border-radius: 0.25rem;
			padding: 1rem;
		`;
	}, [theme, color]);

	return { backdropStyle, modalStyle };
};

export default useModalStyles;
