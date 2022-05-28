import { Meta, Story } from "@storybook/react";
import React from "react";
import Button, { ButtonProps } from "./Button";
import { ArrowSmRightIcon, CheckIcon, StarIcon } from "@heroicons/react/solid/";

const meta: Meta = {
	title: "Button",
	component: Button,
	argTypes: {
		endIcon: {
			control: {
				type: "boolean",
			},
		},
		startIcon: {
			control: {
				type: "boolean",
			},
		},
	},
};

export default meta;

const getIconPair = (startIcon: boolean, endIcon: boolean) => {
	if (endIcon && startIcon) {
		return [<StarIcon />, <StarIcon />];
	}

	if (endIcon) {
		return [null, <ArrowSmRightIcon />];
	}

	if (startIcon) {
		return [<CheckIcon />, null];
	}

	return [null, null];
};

const Template: Story<ButtonProps> = ({ startIcon, endIcon, ...rest }) => {
	const [start, end] = getIconPair(startIcon as boolean, endIcon as boolean);

	return <Button startIcon={start} endIcon={end} {...rest} />;
};

export const Filled = Template.bind({});
export const Outlined = Template.bind({});
export const Ghost = Template.bind({});
export const IconButton = Template.bind({});

Filled.args = { variant: "filled", children: "Button" };
Outlined.args = { variant: "outlined", children: "Button", color: "secondary" };
Ghost.args = { variant: "ghost", children: "Button", color: "tertiary" };
IconButton.args = {
	variant: "filled",
	children: "Button",
	endIcon: true,
};
