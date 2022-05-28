import { Meta, Story } from "@storybook/react";
import React from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

const meta: Meta = {
	title: "Radio Button",
	component: RadioButton,
	argTypes: {},
};

export default meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});

Default.args = { checked: false, label: "Radio Button" };

export const Controlled = () => {
	const [checked, setChecked] = React.useState(false);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	return (
		<RadioButton
			label={`This radio button is ${checked ? "checked" : "unchecked"}`}
			checked={checked}
			onChange={handleChange}
		/>
	);
};
