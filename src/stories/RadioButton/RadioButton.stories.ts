import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import RadioButton, { RadioProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
    backgroundColor: { control: 'color' },
  },
} as Meta<RadioProps>;

export const Default: Story<RadioProps> = (args) => React.createElement(RadioButton, args);
Default.args = {
  label: 'Visa',
  checked: false,
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const radioButton = await canvas.getByLabelText(args.label);
  await userEvent.click(radioButton);
};

export const Disabled: Story<RadioProps> = (args) => React.createElement(RadioButton, {...args, disabled: true});
Disabled.args = {
  label: 'Avion',
  disabled: true,
};
