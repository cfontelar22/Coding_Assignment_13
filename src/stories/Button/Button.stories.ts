import React from 'react';
import { Meta, Story } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta<ButtonProps>;

export const SearchButton: Story<ButtonProps> = (args) => React.createElement(Button, args);
SearchButton.args = {
  text: 'Search',
  backgroundColor: '#2E86C1',
  hoverBackgroundColor: '#4682B4',
};
SearchButton.storyName = 'Search';
SearchButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /search/i });
  await userEvent.click(button);
  await userEvent.hover(button);
};

export const ViewButton: Story<ButtonProps> = (args) => React.createElement(Button, args);
ViewButton.args = {
  text: 'View',
  backgroundColor: '#F39C12',
  hoverBackgroundColor: '#FFA500',
};
ViewButton.storyName = 'View';
ViewButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /view/i });
  await userEvent.click(button);
  await userEvent.hover(button);
};

export const DisabledSearchButton: Story<ButtonProps> = (args) => React.createElement(Button, { ...args, disabled: true });
DisabledSearchButton.args = {
  text: 'Search',
  backgroundColor: '#2E86C1',
  hoverBackgroundColor: '#4682B4',
};
DisabledSearchButton.storyName = 'Search (Disabled)';

export const DisabledViewButton: Story<ButtonProps> = (args) => React.createElement(Button, { ...args, disabled: true });
DisabledViewButton.args = {
  text: 'View',
  backgroundColor: '#F39C12',
  hoverBackgroundColor: '#FFA500',
};
DisabledViewButton.storyName = 'View (Disabled)';
