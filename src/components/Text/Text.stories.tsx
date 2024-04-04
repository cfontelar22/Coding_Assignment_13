import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Text, { TextProps } from './Text'; 

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' }, 
    disabled: { control: 'boolean' }, 
  },
} as Meta<TextProps>;

export const Default: Story<TextProps> = (args) => (
  <Text {...args} />
);
Default.args = {
  text: 'As a network engineer, I specialize in designing, implementing, and managing computer networks.',
  color: 'blue',
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  // Ensure that args.text has a value before using it.
  const textToFind = args.text || 'default text if undefined';
  const textElement = await canvas.getByText(textToFind);
  await userEvent.hover(textElement);
  await userEvent.click(textElement);
};
export const Disabled: Story<TextProps> = (args) => (
  <Text {...args} />
);
Disabled.args = {
  text: 'As a network engineer, I specialize in designing, implementing, and managing computer networks.',
  color: 'gray',
  disabled: true,
};
