import { Meta, Story } from "@storybook/react";
import React from "react";
import Button from "../Button";
import Modal, { ModalProps } from "./Modal";

const meta: Meta = {
	title: "Modal",
	component: Modal,
	argTypes: {},
};

export default meta;

const Template: Story<ModalProps> = (args) => {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Button variant="ghost" onClick={() => setOpen(true)}>
				Open Modal
			</Button>
			<Modal open={open} handleClose={() => setOpen(false)}>
				<h1>Hello world!</h1>
			</Modal>
		</>
	);
};

export const Default = Template.bind({});

Default.args = {};
