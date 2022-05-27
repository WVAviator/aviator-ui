import { css } from "@emotion/react";
import { useMemo } from "react";

const useCheckboxStyles = () => {
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

	const checkStyle = useMemo(() => {
		return css`
			transition: all 0.1s ease-in-out;
		`;
	}, []);

	const internalHtmlStyle = useMemo(() => {
		return css`
			display: none;
		`;
	}, []);

	return {
		labelStyle,
		svgWrapperStyle,
		checkStyle,
		internalHtmlStyle,
	};
};

export default useCheckboxStyles;
