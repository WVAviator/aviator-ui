import { css, Theme } from "@emotion/react";
import { useMemo } from "react";
import { useTheme } from "../../theme";
import { SpinnerAnimationOptions } from "./Spinner";

const useSpinnerStyles = (
	color: keyof Theme["colors"],
	size: "small" | "medium" | "large" | number,
	strokeWidth: number,
	animationOptions: SpinnerAnimationOptions
) => {
	const { colors } = useTheme();

	const pixelSize = useMemo(() => {
		switch (size) {
			case "small":
				return "3rem";
			case "medium":
				return "6rem";
			case "large":
				return "9rem";
			default:
				return size.toString() + "px";
		}
	}, [size]);

	const spinnerStyles = useMemo(() => {
		return css`
			width: ${pixelSize};
			height: ${pixelSize};
			& svg {
				animation: rotate ${animationOptions.duration}s linear infinite;
			}
			& circle {
				animation: dash ${animationOptions.duration}s
					${animationOptions.easingFunction} infinite;
				fill: none;
				stroke: ${colors[color]};
				stroke-width: ${strokeWidth};
				stroke-linecap: round;
			}

			@keyframes rotate {
				from {
					transform: rotate(0deg);
				}
				to {
					transform: rotate(360deg);
				}
			}
			@keyframes dash {
				0% {
					stroke-dasharray: 1, 200;
					stroke-dashoffset: 0;
				}
				50% {
					stroke-dasharray: 89, 200;
					stroke-dashoffset: -35;
				}
				100% {
					stroke-dasharray: 89, 200;
					stroke-dashoffset: -124;
				}
			}
		`;
	}, [colors, color, size, strokeWidth]);

	return { spinnerStyles };
};

export default useSpinnerStyles;
