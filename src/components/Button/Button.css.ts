import { css, Theme } from "@emotion/react";
import { useMemo } from "react";
import { useTheme } from "../../theme";
import { highestTextContrast, shadeColor } from "../../utils";
import { ButtonVariants } from "./Button";

const useButtonStyles = (
	variant: ButtonVariants,
	color: keyof Theme["colors"]
) => {
	const { colors } = useTheme();

	const baseStyle = useMemo(() => {
		return css`
			border: none;
			box-sizing: border-box;
			padding: 0.6em 1em;
			border-radius: 0.25rem;
			font-size: 1rem;
			font-weight: bold;
			cursor: pointer;
			transition: all 0.2s ease-in-out;
			box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 0.5em;
		`;
	}, []);

	const variantStyle = useMemo(() => {
		return {
			filled: css`
				border: 2px solid ${colors[color]};
				background-color: ${colors[color]};
				color: ${highestTextContrast(
					colors[color],
					colors.textLight,
					colors.textDark
				)};
				&:hover {
					background-color: ${shadeColor(colors[color], -0.2)};
					box-shadow: 0px 1.2px 1px 1px rgba(0, 0, 0, 0.1);
				}
				&:active {
					box-shadow: 0px 0.2px 1px 1px rgba(0, 0, 0, 0.1);
					transform: scale(95%);
				}
			`,
			outlined: css`
				border: 2px solid ${colors[color]};
				background-color: transparent;
				color: ${colors[color]};
				&:hover {
					background-color: ${colors[color]};
					color: ${highestTextContrast(
						colors[color],
						colors.textLight,
						colors.textDark
					)};
					box-shadow: 0px 1.2px 1px 1px rgba(0, 0, 0, 0.1);
				}
				&:active {
					box-shadow: 0px 0.2px 1px 1px rgba(0, 0, 0, 0.1);
					transform: scale(95%);
				}
			`,
			ghost: css`
				border: 2px solid transparent;
				background-color: transparent;
				box-shadow: none;
				color: ${colors[color]};
				&:hover {
					background-color: ${colors[color]}60;
					color: ${highestTextContrast(
						colors[color],
						colors.textLight,
						colors.textDark
					)};
				}
				&:active {
					transform: scale(95%);
				}
			`,
		}[variant];
	}, [variant, color, colors]);

	const iconStyles = useMemo(() => {
		return css`
			width: 1.35em;
			height: 1.35em;
		`;
	}, []);

	return { buttonStyles: [baseStyle, variantStyle], iconStyles };
};

export default useButtonStyles;
