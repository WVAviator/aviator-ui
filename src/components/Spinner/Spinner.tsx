/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React, { useMemo } from "react";
import useSpinnerStyles from "./Spinner.css";

export interface SpinnerAnimationOptions {
	/**
	 * The duration of the spinning animation in seconds.
	 * @default 2
	 */
	duration: number;
	/**
	 * The easing function to use for the stroke dasharray animation.
	 * @default "ease-in-out"
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
	 * @example
	 * { duration: 2, easingFunction: "cubic-bezier(.8,.32,.66,1.42)" }
	 */
	easingFunction: string;
}

export interface SpinnerProps {
	/**
	 * The color used from the current theme.
	 * @default "primary"
	 * @example
	 * <Spinner color="secondary" />
	 */
	color?: keyof Theme["colors"];
	/**
	 * The size of the spinner. Use "small", "medium", or "large", or define a custom size in pixels.
	 * @default "medium"
	 * @example
	 * <Spinner size={50} />
	 * <Spinner size="large" />
	 */
	size?: "small" | "medium" | "large" | number;
	/**
	 * The width of the spinner's stroke in pixels.
	 * @default 5
	 * @example
	 * <Spinner strokeWidth={10} />
	 */
	strokeWidth?: number;
	/**
	 * The animation options for the spinner. Define any number of options and they will be merged with the default animation options.
	 * @default { duration: 2, easingFunction: "ease-in-out" }
	 * @example
	 * <Spinner animationOptions={{ duration: 5 }} />
	 * <Spinner animationOptions={{ duration: 3, easingFunction: "cubic-bezier(.8,.32,.66,1.42)" }} />
	 */
	animationOptions?: Partial<SpinnerAnimationOptions>;
}

const Spinner: React.FC<SpinnerProps> = ({
	color = "primary",
	size = "medium",
	strokeWidth = 5,
	animationOptions = {},
}) => {
	const appliedAnimationOptions = useMemo(() => {
		const defaultAnimationOptions = {
			duration: 2,
			easingFunction: "ease-in-out",
		};

		return {
			...defaultAnimationOptions,
			...animationOptions,
		};
	}, [animationOptions]);

	const { spinnerStyles } = useSpinnerStyles(
		color,
		size,
		strokeWidth,
		appliedAnimationOptions
	);

	return (
		<div css={spinnerStyles} role="progressbar">
			<svg viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="20" />
			</svg>
		</div>
	);
};

export default Spinner;
