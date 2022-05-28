/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React from "react";
import useButtonStyles from "./Button.css";

export type ButtonVariants = "filled" | "outlined" | "ghost";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	color?: keyof Theme["colors"];
	endIcon?: React.ReactNode;
	startIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	variant = "filled",
	color = "primary",
	endIcon = null,
	startIcon = null,
	children,
	...rest
}) => {
	const { buttonStyles, iconStyles } = useButtonStyles(variant, color);

	return (
		<button css={buttonStyles} {...rest}>
			{startIcon && <span css={iconStyles}>{startIcon}</span>}
			<span>{children}</span>
			{endIcon && <span css={iconStyles}>{endIcon}</span>}
		</button>
	);
};

export default Button;
