/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React, { useMemo, useState } from "react";
import { useAviatorTheme } from "../../theme";

export interface MenuIconProps {
	open?: boolean;
	setOpen?: (open: boolean) => void;
	animationOptions?: Partial<MenuIconAnimationOptions>;
	color?: keyof Theme["colors"];
	size?: number;
}

export interface MenuIconAnimationOptions {
	animated: boolean;
	easingFunction: string;
	duration: number;
}

const useMenuIconStyles = (
	open: boolean,
	animationOptions: MenuIconAnimationOptions,
	color: keyof Theme["colors"],
	size: number
) => {
	const theme = useAviatorTheme();

	const { animated, easingFunction, duration } = animationOptions;

	const splitDuration = useMemo(() => (animated ? duration * 0.5 : 0), [
		duration,
	]);
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
		`;
	}, [theme, size]);

	return {
		topStyles: [commonStyles, topStyles],
		bottomStyles: [commonStyles, bottomStyles],
		midStyles: [commonStyles, midStyles],
		buttonStyles,
	};
};

const MenuIcon = ({
	open = false,
	setOpen,
	animationOptions,
	color = "primary",
	size = 30,
}: MenuIconProps) => {
	const [internalOpen, setInternalOpen] = useState(open);

	const appliedAnimationOptions = useMemo(() => {
		const defaultAnimationOptions = {
			animated: true,
			easingFunction: "ease-in-out",
			duration: 300,
		};

		return {
			...defaultAnimationOptions,
			...animationOptions,
		};
	}, [animationOptions]);

	const {
		topStyles,
		bottomStyles,
		midStyles,
		buttonStyles,
	} = useMenuIconStyles(internalOpen, appliedAnimationOptions, color, size);

	const handleClick = (toOpen: boolean) => {
		setInternalOpen(toOpen);
		setOpen && setOpen(toOpen);
	};

	return (
		<button
			id="menubutton"
			role="button"
			aria-haspopup="true"
			aria-label="Menu"
			aria-expanded={open}
			aria-controls="mobilemenu"
			css={buttonStyles}
			onClick={() => handleClick(!internalOpen)}
		>
			<div
				css={css`
					position: relative;
				`}
			>
				<div css={topStyles}></div>
				<div css={midStyles}></div>
				<div css={bottomStyles}></div>
			</div>
		</button>
	);
};
export default MenuIcon;
