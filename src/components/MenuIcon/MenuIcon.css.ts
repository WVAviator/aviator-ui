import { css, Theme } from "@emotion/react";
import { useMemo } from "react";
import { useTheme } from "../../theme";
import { MenuIconAnimationOptions } from "./MenuIcon";

const useMenuIconStyles = (
	open: boolean,
	animationOptions: MenuIconAnimationOptions,
	color: keyof Theme["colors"],
	size: number
) => {
	const theme = useTheme();

	const { animated, easingFunction, duration } = animationOptions;

	const splitDuration = useMemo(
		() => (animated ? duration * 0.5 : 0),
		[duration]
	);
	const remSize = useMemo(() => size / 16, [size]);

	const commonStyles = useMemo(() => {
		return css`
			width: ${remSize}rem;
			height: ${remSize / 6}rem;
			background-color: ${theme.colors[color]};
			border-radius: ${remSize / 15}rem;
		`;
	}, [theme, size]);

	const topStyles = useMemo(() => {
		return css`
			position: absolute;
			${open
				? `
                top: 0;
                transform: rotate(45deg);
                transition: transform ${splitDuration}ms ${splitDuration}ms ${easingFunction}, top ${splitDuration}ms 0ms ${easingFunction};
            `
				: `
                transition: transform ${splitDuration}ms 0ms ${easingFunction}, top ${splitDuration}ms ${splitDuration}ms ${easingFunction};
                top: ${remSize / 3}rem;
                transform: rotate(0deg)
                
                `};
		`;
	}, [open, duration, easingFunction, size]);

	const bottomStyles = useMemo(() => {
		return css`
			position: absolute;
			${open
				? `
                top: 0;
                transform: rotate(-45deg);
                transition: transform ${splitDuration}ms ${splitDuration}ms ${easingFunction}, top ${splitDuration}ms 0ms ${easingFunction};
                `
				: `
                transition: transform ${splitDuration}ms 0ms ${easingFunction}, top ${splitDuration}ms ${splitDuration}ms ${easingFunction};
                top: -${remSize / 3}rem;
                transform: rotate(0deg)
                `}
		`;
	}, [open, duration, easingFunction, size]);

	const midStyles = useMemo(() => {
		return css`
			transition: opacity 0ms ${splitDuration}ms;
			${open ? "opacity: 0;" : "opacity: 1;"}
		`;
	}, [open, duration]);

	const buttonStyles = useMemo(() => {
		return css`
			height: ${remSize}rem;
			width: ${remSize}rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border: none;
			background-color: transparent;
			cursor: pointer;
			& > div {
				position: relative;
			}
		`;
	}, [theme, size]);

	return {
		topStyles: [commonStyles, topStyles],
		bottomStyles: [commonStyles, bottomStyles],
		midStyles: [commonStyles, midStyles],
		buttonStyles,
	};
};

export default useMenuIconStyles;
