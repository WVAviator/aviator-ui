import { Meta, Story } from "@storybook/react";
import React from "react";
import Checkbox, { CheckboxProps } from "./Checkbox";

const meta: Meta = {
	title: "Checkbox",
	component: Checkbox,
	argTypes: {},
};

export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = { defaultChecked: true, label: "Checkbox" };

export const Controlled = () => {
	const [checked, setChecked] = React.useState(false);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	return (
		<Checkbox
			label={`This box is ${checked ? "checked" : "unchecked"}`}
			checked={checked}
			onChange={handleChange}
		/>
	);
};
