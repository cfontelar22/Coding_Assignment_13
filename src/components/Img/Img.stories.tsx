import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Img, { ImgProps } from './Img';

interface ImgPropsWithDisabled extends ImgProps {
  disabled?: boolean;
}

export default {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' }, 
    backgroundColor: { control: 'color' },
  },
} as Meta<ImgPropsWithDisabled>;

export const Default: Story<ImgPropsWithDisabled> = (args) => <Img {...args} />;
Default.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Logo Sample',
  className: 'image',
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const image = await canvas.getByAltText(args.alt);
  await userEvent.hover(image);
  await new Promise((r) => setTimeout(r, 500)); // Wait for visual confirmation
  await userEvent.click(image);
  await userEvent.unhover(image);
};

export const Disabled: Story<ImgPropsWithDisabled> = (args) => <Img {...args} />;
Disabled.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Logo Sample',
  className: 'image',
  disabled: true, 
};
// No play function for Disabled as it should not be interactive.
