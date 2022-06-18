/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React, { useMemo } from "react";
import { useTheme } from "../../theme";
import { ButtonVariants, RippleAnimationOptions } from "./Button";

interface ButtonRippleProps {
	x: number;
	y: number;
	variant: ButtonVariants;
	color: keyof Theme["colors"];
	animationOptions: RippleAnimationOptions;
}

const useButtonRippleStyles = (
	x: number,
	y: number,
	variant: ButtonVariants,
	color: keyof Theme["colors"],
	animationOptions: RippleAnimationOptions
) => {
	const theme = useTheme();

	const rippleColor = useMemo(() => {
		switch (variant) {
			case "filled":
				return "#FFF";
			case "outlined":
				return theme.colors[color];
			case "ghost":
				return "transparent";
		}
	}, [variant, color, theme]);

	const rippleStyle = useMemo(() => {
		return css`
			position: absolute;
			pointer-events: none;
			width: ${animationOptions.size}%;
			aspect-ratio: 1;
			background-color: ${rippleColor};
			opacity: ${animationOptions.initialOpacity};
			border-radius: 50%;
			top: ${y}px;
			left: ${x}px;
			transform: translate(-50%, -50%);
			animation: ripple ${animationOptions.duration}ms
				${animationOptions.easingFunction};

			@keyframes ripple {
				0% {
					opacity: ${animationOptions.initialOpacity};
					transform: translate(-50%, -50%) scale(0);
				}
				100% {
					opacity: 0;
					transform: translate(-50%, -50%) scale(1);
				}
			}
		`;
	}, [x, y, variant, color, animationOptions]);

	return { rippleStyle };
};

const ButtonRipple: React.FC<ButtonRippleProps> = ({
	x,
	y,
	variant,
	color,
	animationOptions,
}) => {
	const { rippleStyle } = useButtonRippleStyles(
		x,
		y,
		variant,
		color,
		animationOptions
	);

	return <div css={rippleStyle}></div>;
};
export default ButtonRipple;
