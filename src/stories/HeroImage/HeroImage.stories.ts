import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta<HeroImageProps>;

export const Default: Story<HeroImageProps> = (args) => React.createElement(HeroImage, args);
Default.args = {
  imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
  title: 'WELCOME TO MY PORTFOLIO',
  subtitle: 'I AM CHRISTMA FONTELAR',
  description: 'Explore my projects and experience.',
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const titleElement = await canvas.getByText(args.title);
  await userEvent.hover(titleElement);
  await new Promise((r) => setTimeout(r, 500));
  await userEvent.click(titleElement);
  await userEvent.tab();
};

export const Disabled: Story<HeroImageProps> = (args) => React.createElement(HeroImage, {...args, disabled: true});
Disabled.args = {
  imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
  title: 'WELCOME TO MY PORTFOLIO',
  subtitle: 'I AM CHRISTMA FONTELAR',
  description: 'Explore my projects and experience.',
  disabled: true,
};
