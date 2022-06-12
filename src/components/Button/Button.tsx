/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React from "react";
import useButtonStyles from "./Button.css";

export type ButtonVariants = "filled" | "outlined" | "ghost";
export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	/**
	 * The variant of the button. Options are "filled", "outlined", or "ghost".
	 * @default "filled"
	 * @example
	 * <Button variant="outlined">Outlined</Button>
	 */
	variant?: ButtonVariants;
	/**
	 * The color used from the current theme.
	 * @default "primary"
	 * @example
	 * <Button color="secondary">Secondary</Button>
	 */
	color?: keyof Theme["colors"];
	/**
	 * An icon or other React component to be placed at the end of the button, after the text. You can use your own icon components or components from icon libraries, such as @heroicons/react.
	 * @example
	 * <Button endIcon={<ArrowSmRightIcon />}>See More</Button>
	 */
	endIcon?: React.ReactNode;
	/**
	 * An icon React component to be placed at the start of the button, before the text. You can use your own icon components or components from icon libraries, such as @heroicons/react.
	 * @example
	 * <Button startIcon={<CheckIcon />}>Complete</Button>
	 */
	startIcon?: React.ReactNode;
	/**
	 * The size of the button. Options are "small", "medium", or "large".
	 * @default "medium"
	 */
	size?: ButtonSize;
	/**
	 * An optional link that clicking the button will navigate to.
	 * @example
	 * <Button href="https://www.google.com">Google</Button>
	 */
	href?: string;
}

/**
 * A basic button.
 * @example
 * <Button color="secondary">Click Me</Button>
 */
const Button: React.FC<ButtonProps> = ({
	variant = "filled",
	color = "primary",
	endIcon = null,
	startIcon = null,
	size = "medium",
	href,
	children,
	...rest
}) => {
	const { linkStyle, buttonStyles, iconStyles } = useButtonStyles(
		variant,
		color,
		size
	);

	const button = (
		<button css={buttonStyles} {...rest}>
			{startIcon && <span css={iconStyles}>{startIcon}</span>}
			<span>{children}</span>
			{endIcon && <span css={iconStyles}>{endIcon}</span>}
		</button>
	);

	if (href) {
		return (
			<a css={linkStyle} href={href}>
				{button}
			</a>
		);
	}

	return button;
};

export default Button;
