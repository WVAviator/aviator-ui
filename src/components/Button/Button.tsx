/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React, { useMemo } from "react";
import { highestTextContrast, shadeColor } from "../../color";
import useAviatorTheme from "../../theme/useAviatorTheme";

export type ButtonVariants = "filled" | "outlined" | "ghost";

const baseStyle = css`
	border: none;
	box-sizing: border-box;
	padding: 0.6em 1.2em;
	border-radius: 0.25rem;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const getVariantStyle = (
	variant: ButtonVariants,
	color: string,
	{ colors }: Theme
) => {
	return {
		filled: css`
			border: 2px solid ${color};
			background-color: ${color};
			color: ${highestTextContrast(
				color,
				colors.textLight,
				colors.textDark
			)};
			&:hover {
				background-color: ${shadeColor(color, -20)};
				box-shadow: 0px 1.2px 1px 1px rgba(0, 0, 0, 0.1);
			}
			&:active {
				box-shadow: 0px 0.2px 1px 1px rgba(0, 0, 0, 0.1);
				transform: scale(95%);
			}
		`,
		outlined: css`
			border: 2px solid ${color};
			background-color: transparent;
			color: ${color};
			&:hover {
				background-color: ${color};
				color: ${highestTextContrast(
					color,
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
			color: ${color};
			&:hover {
				background-color: ${color}60;
				color: ${highestTextContrast(
					color,
					colors.textLight,
					colors.textDark
				)};
			}
			&:active {
				transform: scale(95%);
			}
		`,
	}[variant];
};

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	color?: keyof Theme["colors"];
}

const Button: React.FC<ButtonProps> = ({
	variant = "filled",
	color = "primary",
	...rest
}) => {
	const theme = useAviatorTheme();

	const variantStyle = useMemo(
		() => getVariantStyle(variant, theme.colors[color], theme),
		[theme, variant, color]
	);

	return <button css={[baseStyle, variantStyle]} {...rest} />;
};

export default Button;
