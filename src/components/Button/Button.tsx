/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React from "react";
import useButtonStyles from "./Button.css";

export type ButtonVariants = "filled" | "outlined" | "ghost";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
	color?: keyof Theme["colors"];
}

const Button: React.FC<ButtonProps> = ({
	variant = "filled",
	color = "primary",
	...rest
}) => {
	const { buttonStyles } = useButtonStyles(variant, color);

	return <button css={buttonStyles} {...rest} />;
};

export default Button;
