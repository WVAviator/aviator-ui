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

type ButtonGroupProps = {
	props: Partial<ButtonProps>[];
};

const MultiTemplate: Story<ButtonGroupProps> = (args) => {
	const { props } = args;
	return (
		<div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
			{props.map((item, index) => (
				<Button key={index} {...item} />
			))}
		</div>
	);
};

export const Sizes = MultiTemplate.bind({});
export const Variants = MultiTemplate.bind({});

Sizes.args = {
	props: [
		{ size: "small", children: "Small", variant: "filled" },
		{ size: "medium", children: "Medium", variant: "filled" },
		{ size: "large", children: "Large", variant: "filled" },
	],
};

Variants.args = {
	props: [
		{ variant: "filled", children: "Filled" },
		{ variant: "outlined", children: "Outlined" },
		{ variant: "ghost", children: "Ghost" },
	],
};

const Template: Story<ButtonProps> = ({ startIcon, endIcon, ...rest }) => {
	const [start, end] = getIconPair(startIcon as boolean, endIcon as boolean);

	return <Button startIcon={start} endIcon={end} {...rest} />;
};

export const IconButton = Template.bind({});

IconButton.args = {
	variant: "filled",
	children: "Button",
	endIcon: true,
};
