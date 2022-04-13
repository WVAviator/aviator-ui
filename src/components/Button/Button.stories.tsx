import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta = {
	title: "Button",
	component: Button,
	argTypes: {},
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Filled = Template.bind({});
export const Outlined = Template.bind({});
export const Ghost = Template.bind({});

Filled.args = { variant: "filled", children: "Button" };
Outlined.args = { variant: "outlined", children: "Button" };
Ghost.args = { variant: "ghost", children: "Button" };
