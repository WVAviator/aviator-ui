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
			<Modal
				open={open}
				handleClose={() => setOpen(false)}
				style={{ minWidth: "18rem", minHeight: "18rem" }}
			>
				<h1>Hello world!</h1>
				<p>This is a modal</p>
				<Button variant="filled" onClick={() => setOpen(false)}>
					Close
				</Button>
			</Modal>
		</>
	);
};

export const Default = Template.bind({});

Default.args = {};
