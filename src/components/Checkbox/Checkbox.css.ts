import { css } from "@emotion/react";
import { useMemo } from "react";

const useCheckboxStyles = (internalChecked: boolean) => {
	const labelStyle = useMemo(() => {
		return css`
			display: flex;
			align-items: center;
			gap: 1em;
			user-select: none;
			cursor: pointer;
			&:hover > span {
				transform: scale(1.05);
			}
			&:active > span {
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
			opacity: ${internalChecked ? 1 : 0};
		`;
	}, [internalChecked]);

	const internalHtmlStyle = useMemo(() => {
		return css`
			appearance: none;
			&:focus + label > span {
				outline-style: solid;
				outline-width: 1px;
				outline-color: #a1a1a1;
				outline-offset: 1px;
			}
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
