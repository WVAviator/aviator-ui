/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../theme";
import { CompoundStyle } from "../../types";
import { ColorScheme, Palette } from "../../theme/themeTypes";

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

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: "filled" | "outlined" | "ghost";
	palette?: keyof ColorScheme;
	color?: keyof Palette;
}

const Button: React.FC<ButtonProps> = ({
	variant = "filled",
	palette = "accent",
	color = "primary",
	...rest
}) => {
	const theme = useContext(ThemeContext);
	const chosenPalette = useMemo(() => {
		return theme.colors[palette];
	}, [theme, palette]);

	const variantStyle: CompoundStyle = useMemo(
		() => ({
			filled: css`
				border: 2px solid ${chosenPalette[color].medium};
				background-color: ${chosenPalette[color].medium};
				color: ${chosenPalette.text.medium};
				&:hover {
					background-color: ${chosenPalette[color].dark};
					box-shadow: 0px 1.2px 1px 1px rgba(0, 0, 0, 0.1);
				}
				&:active {
					box-shadow: 0px 0.2px 1px 1px rgba(0, 0, 0, 0.1);
					transform: scale(95%);
				}
			`,
			outlined: css`
				border: 2px solid ${chosenPalette[color].medium};
				background-color: transparent;
				color: ${chosenPalette[color].medium};
				&:hover {
					background-color: ${chosenPalette[color].medium};
					color: ${chosenPalette.text.medium};
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
				color: ${chosenPalette[color].medium};
				&:hover {
					background-color: ${chosenPalette[color].medium}60;
					color: ${chosenPalette.text.medium};
				}
				&:active {
					transform: scale(95%);
				}
			`,
		}),
		[theme, variant, palette, color]
	);

	return <button css={[baseStyle, variantStyle[variant]]} {...rest} />;
};

export default Button;
