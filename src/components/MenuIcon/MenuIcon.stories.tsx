import { Meta, Story } from "@storybook/react";
import React from "react";
import MenuIcon, { MenuIconProps } from "./MenuIcon";

const meta: Meta = {
	title: "Menu Icon",
	component: MenuIcon,
	argTypes: {},
};

export default meta;

const Template: Story<MenuIconProps> = args => <MenuIcon {...args} />;

export const Default = Template.bind({});
export const CustomizedAnimation = Template.bind({});
export const DisabledAnimation = Template.bind({});
export const CustomizedColor = Template.bind({});
export const CustomizedSize = Template.bind({});

CustomizedAnimation.args = {
	animationOptions: {
		easingFunction: "cubic-bezier(1,-0.36, 0.67, 1.76)",
		duration: 600,
	},
};
DisabledAnimation.args = { animationOptions: { animated: false } };
CustomizedColor.args = { color: "secondary" };
CustomizedSize.args = { size: 100 };

export const Controlled = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
			<MenuIcon open={open} setOpen={setOpen} />
			<p>{open ? "Opened Menu" : "Closed Menu"}</p>
		</div>
	);
};
