/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../theme";
import { ColorScheme, Palette, Theme } from "../../theme/themeTypes";

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
	palette: Palette,
	color: keyof Palette
) => {
	return {
		filled: css`
			border: 2px solid ${palette[color].medium};
			background-color: ${palette[color].medium};
			color: ${palette.text.medium};
			&:hover {
				background-color: ${palette[color].dark};
				box-shadow: 0px 1.2px 1px 1px rgba(0, 0, 0, 0.1);
			}
			&:active {
				box-shadow: 0px 0.2px 1px 1px rgba(0, 0, 0, 0.1);
				transform: scale(95%);
			}
		`,
		outlined: css`
			border: 2px solid ${palette[color].medium};
			background-color: transparent;
			color: ${palette[color].medium};
			&:hover {
				background-color: ${palette[color].medium};
				color: ${palette.text.medium};
				box-shadow: 0px 1.2px 1px 1px rgba(0, 0, 0, 0.1);
			}
			&:active {
				box-shadow: 0px 0.2px 1px 1px rgba(0, 0, 0, 0.1);
				transform: scale(95%);
			}
		`,
		ghost: css`
			border: transparent;
			background-color: transparent;
			box-shadow: none;
			color: ${palette[color].medium};
			&:hover {
				background-color: ${palette[color].medium}60;
				color: ${palette.text.medium};
			}
			&:active {
				transform: scale(95%);
			}
		`,
	}[variant];
};

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	palette?: keyof ColorScheme;
	color?: keyof Palette;
}

const Button: React.FC<ButtonProps> = ({
	variant = "filled",
	palette = "accent",
	color = "primary",
	...rest
}) => {
	const theme: Theme = useContext(ThemeContext);

	const variantStyle = useMemo(
		() => getVariantStyle(variant, theme.colors[palette], color),
		[theme, variant, palette, color]
	);

	return <button css={[baseStyle, variantStyle]} {...rest} />;
};

export default Button;
