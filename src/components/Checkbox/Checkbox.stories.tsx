import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

const meta: Meta = {
	title: "Checkbox",
	component: Checkbox,
	argTypes: {},
};

export default meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Checked = Template.bind({});
export const Unchecked = Template.bind({});

Checked.args = { defaultChecked: true, label: "Checked" };
Unchecked.args = { defaultChecked: false, label: "Unchecked" };
