/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React, { useMemo, useState } from "react";
import useMenuIconStyles from "./MenuIcon.css";

export interface MenuIconProps {
	/**
	 * A boolean to set the initial state or externally control the state of the menu icon. Open animates the icon to an "X" when true, or a standard hamburger icon when false.
	 * @example
	 * @default false
	 * <MenuIcon open={true} />
	 */
	open?: boolean;
	/**
	 * A callback function that is called when the menu icon is activated by the user, receiving one argument that represents whether the menu has been opened or closed.
	 * @example
	 * <MenuIcon onChange={(open) => console.log("Menu icon clicked. Open:", open)} />
	 */
	onChange?: (open: boolean) => void;
	/**
	 * An object representing animation options for the menu icon.
	 * @example
	 * <MenuIcon animation={{ duration: 0.5 }} />
	 */
	animationOptions?: Partial<MenuIconAnimationOptions>;
	/**
	 * The color used from the current theme for the menu icon.
	 * @default "primary"
	 * @example
	 * <MenuIcon color="secondary" />
	 */
	color?: keyof Theme["colors"];
	/**
	 * The size of the menu icon, representing the width and height in pixels.
	 * @default 30
	 * @example
	 * <MenuIcon size={40} />
	 */
	size?: number;
}

export interface MenuIconAnimationOptions {
	/**
	 * A boolean representing whether the menu icon should animate when it is opened or closed.
	 * @default true
	 */
	animated: boolean;
	/**
	 * The easing function to use for the animation.
	 * @default "ease-in-out"
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
	 * @example
	 * { easingFunction: "cubic-bezier(.8,.32,.66,1.42)" }
	 * { easingFunction: "linear" }
	 */
	easingFunction: string;
	/**
	 * The duration of the animation in milliseconds.
	 * @default 300
	 * @example
	 * { duration: 500 }
	 */
	duration: number;
}
/**
 * A hamburger-style icon that can be used as a button to open and close a menu.
 * @example
 * <MenuIcon color="secondary" animationOptions={{duration: 150, easingFunction: "cubic-bezier(.8,.32,.66,1.42)"}} />
 */
const MenuIcon: React.FC<MenuIconProps> = ({
	open = false,
	onChange,
	animationOptions,
	color = "primary",
	size = 30,
}) => {
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

	const { topStyles, bottomStyles, midStyles, buttonStyles } =
		useMenuIconStyles(internalOpen, appliedAnimationOptions, color, size);

	const handleClick = (toOpen: boolean) => {
		setInternalOpen(toOpen);
		onChange && onChange(toOpen);
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
			<div>
				<div css={topStyles}></div>
				<div css={midStyles}></div>
				<div css={bottomStyles}></div>
			</div>
		</button>
	);
};
export default MenuIcon;
