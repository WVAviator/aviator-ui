import { Meta, Story } from "@storybook/react";
import React from "react";
import Modal, { ModalProps } from "./Modal";

const meta: Meta = {
	title: "Modal",
	component: Modal,
	argTypes: {},
};

export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

Default.args = {};
