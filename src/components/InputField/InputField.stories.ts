import React from 'react';
import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import InputField, { InputFieldProps } from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta<InputFieldProps>;

export const Default: Story<InputFieldProps> = (args) => React.createElement(InputField, args);
Default.args = {
  placeholder: 'Keyword Search',
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const placeholderText = args.placeholder || 'Default Placeholder';
  const input = await canvas.getByPlaceholderText(placeholderText);
  await userEvent.click(input);
  await userEvent.type(input, 'Test');
};

export const Disabled: Story<InputFieldProps> = (args) => React.createElement(InputField, {...args, disabled: true});
Disabled.args = {
  placeholder: 'Keyword Search',
  disabled: true,
  backgroundColor: '#f5f5f5',
};
