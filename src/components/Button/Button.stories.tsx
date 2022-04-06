import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {},
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = { children: 'Button' };
