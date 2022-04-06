/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../../Theme";
import { CompoundStyle } from "../../types";

const baseStyle = css`
	border: none;
	padding: 0.5em 1em;
	border-radius: 0.25rem;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant: "filled" | "outlined";
}

const Button: React.FC<ButtonProps> = ({ variant, ...rest }) => {
	const theme = useContext(ThemeContext);

	const variantStyle: CompoundStyle = useMemo(
		() => ({
			filled: css`
				background-color: ${theme.colors.primary};
				color: ${theme.fontColors.primary};
			`,
			outlined: css`
				border: 2px solid ${theme.colors.primary};
				background-color: transparent;
				color: ${theme.colors.primary};
			`,
		}),
		[theme, variant]
	);

	return <button css={[baseStyle, variantStyle[variant]]} {...rest} />;
};

export default Button;
