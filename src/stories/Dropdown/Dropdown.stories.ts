import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'selected' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta<DropdownProps>;

export const Default: Story<DropdownProps> = (args) => React.createElement(Dropdown, args);
Default.args = {
  options: ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'],
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const select = await canvas.getByRole('combobox');
  await userEvent.click(select);
  await userEvent.selectOptions(select, args.options[1]);
};

export const Disabled: Story<DropdownProps> = (args) => React.createElement(Dropdown, {...args, disabled: true});
Disabled.args = {
  options: ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'],
  disabled: true,
};
