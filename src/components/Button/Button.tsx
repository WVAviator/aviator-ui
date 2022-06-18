/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React, { ReactElement, useMemo } from "react";
import useButtonStyles from "./Button.css";
import ButtonRipple from "./ButtonRipple";

export type ButtonVariants = "filled" | "outlined" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export interface RippleAnimationOptions {
	/**
	 * Whether or not the button ripple animation on click should be enabled
	 * @default true
	 */
	enabled?: boolean;
	/**
	 * The size of the ripple as a percentage of the buttons width.
	 * @default 175
	 */
	size?: number;
	/**
	 * The duration of the ripple animation in milliseconds.
	 * @default 500
	 */
	duration?: number;
	/**
	 * The easing function to use for the animation.
	 * @default "linear"
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
	 * @example
	 * { easingFunction: "cubic-bezier(.8,.32,.66,1.42)" }
	 * { easingFunction: "linear" }
	 */
	easingFunction?: string;
	/**
	 * The opacity of the ripple effect at the start of the animation. This will animate down to 0.
	 * @default 0.35
	 */
	initialOpacity?: number;
}
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
	 * Animation options for the ripple effect on click.
	 */
	animationOptions?: RippleAnimationOptions;
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
	animationOptions = {},
	href,
	children,
	...rest
}) => {
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const appliedAnimationOptions = useMemo(() => {
		const defaultAnimationOptions = {
			animated: true,
			size: 175,
			easingFunction: "linear",
			duration: 500,
			initialOpacity: 0.35,
		};

		return {
			...defaultAnimationOptions,
			...animationOptions,
		};
	}, [animationOptions]);

	const { linkStyle, buttonStyles, iconStyles } = useButtonStyles(
		variant,
		color,
		size
	);

	const [ripples, setRipples] = React.useState<ReactElement[]>([]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (rest.onClick) rest.onClick(e);

		setRipples((ripples) => {
			return [
				...ripples,
				<ButtonRipple
					x={e.nativeEvent.offsetX}
					y={e.nativeEvent.offsetY}
					color={color}
					variant={variant}
					animationOptions={appliedAnimationOptions}
					key={`ripple-${Math.random() * 1000}`}
				/>,
			];
		});

		setTimeout(
			() =>
				setRipples((ripples) => {
					return ripples.slice(1);
				}),
			appliedAnimationOptions.duration
		);
	};

	const button = (
		<button
			css={buttonStyles}
			ref={buttonRef}
			onClick={handleClick}
			{...rest}
		>
			{ripples.map((ripple) => ripple)}
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
