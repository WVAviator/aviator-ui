import { Meta, Story } from "@storybook/react";
import Spinner, { SpinnerProps } from "./Spinner";

const meta: Meta = {
	title: "Spinner",
	component: Spinner,
	argTypes: {},
};

export default meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};

type SpinnerGroupProps = {
	props: Partial<SpinnerProps>[];
};

const MultiTemplate: Story<SpinnerGroupProps> = (args) => {
	const { props } = args;
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			{props.map((item, index) => (
				<Spinner key={index} {...item} />
			))}
		</div>
	);
};
export const Sizes = MultiTemplate.bind({});
Sizes.args = {
	props: [{ size: "small" }, { size: "medium" }, { size: "large" }],
};

export const Animations = MultiTemplate.bind({});
Animations.args = {
	props: [
		{ animationOptions: { duration: 1, easingFunction: "linear" } },
		{
			animationOptions: {
				duration: 3,
				easingFunction: "cubic-bezier(.8,.32,.66,1.42)",
			},
			color: "secondary",
		},
	],
};
