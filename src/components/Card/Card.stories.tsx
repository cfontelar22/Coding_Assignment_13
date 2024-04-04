import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
  },
} as Meta<CardProps>;

export const Default: Story<CardProps> = (args) => <Card {...args} />;
Default.args = {
  title: 'Project 1',
  subtitle: 'Point to Point Network Wireless Bridge',
  description: 'This project is all about implementing one hop to the other hop wireless bridge.',
  image: 'https://via.placeholder.com/300',
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  // Assuming 'Project 1' is unique enough to identify the card
  const card = await canvas.getByText('Project 1');

  // Hover over the card
  await userEvent.hover(card);
  // Wait for the hover state to visually confirm in Storybook
  await new Promise((r) => setTimeout(r, 500));

  // Click the card
  await userEvent.click(card);
}

export const Disabled: Story<CardProps> = (args) => <Card {...args} />;
Disabled.args = {
  title: 'Project 1',
  subtitle: 'Point to Point Network Wireless Bridge',
  description: 'Point to Point Network Wireless Bridge.',
  image: 'https://via.placeholder.com/300',
  disabled: true,
};
