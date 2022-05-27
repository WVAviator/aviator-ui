/** @jsxImportSource @emotion/react */
import { Theme } from "@emotion/react";
import React, { useMemo, useState } from "react";
import useMenuIconStyles from "./MenuIcon.css";

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

const MenuIcon: React.FC<MenuIconProps> = ({
	open = false,
	setOpen,
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
			<div>
				<div css={topStyles}></div>
				<div css={midStyles}></div>
				<div css={bottomStyles}></div>
			</div>
		</button>
	);
};
export default MenuIcon;
