import { css } from "@emotion/react";
import { useMemo } from "react";

const useRadioButtonStyles = (checked: boolean) => {
	const baseInputStyle = useMemo(() => {
		return css`
			display: none;
		`;
	}, []);

	const labelStyle = useMemo(() => {
		return css`
			display: flex;
			align-items: center;
			gap: 1em;
			cursor: pointer;
			&:hover > .svgWrapper {
				transform: scale(1.05);
			}
			&:active > .svgWrapper {
				transform: scale(0.95);
			}
		`;
	}, []);

	const svgWrapperStyle = useMemo(() => {
		return css`
			width: 1.1em;
			height: 1.1em;
			transition: all 0.1s ease-in-out;
		`;
	}, []);

	const radioStyle = useMemo(() => {
		return css`
			transition: all 200ms ease-in-out;
			opacity: ${checked ? 1 : 0};
		`;
	}, [checked]);

	return {
		baseInputStyle,
		labelStyle,
		svgWrapperStyle,
		radioStyle,
	};
};

export default useRadioButtonStyles;
