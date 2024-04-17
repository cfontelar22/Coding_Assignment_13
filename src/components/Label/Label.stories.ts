import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
  decorators: [
    (StoryFn) => (
      React.createElement("div", { style: { fontSize: '24px', fontWeight: 'bold', padding: '10px', margin: '10px' } },
        React.createElement(StoryFn)
      )
    ),
  ],
} as Meta;

const defaultLabelProps: LabelProps = {
  text: 'Label Text',
};

export const AboutDefault: Story<LabelProps> = (args) => React.createElement(Label, args);
AboutDefault.args = { ...defaultLabelProps, text: 'About Us' };
AboutDefault.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(args.text);
  await userEvent.hover(label);
  await new Promise((r) => setTimeout(r, 500));
  await userEvent.click(label);
  await new Promise((r) => setTimeout(r, 500));
};

export const AboutDisabled: Story<LabelProps> = (args) => React.createElement(Label, {...args, disabled: true});
AboutDisabled.args = { ...defaultLabelProps, text: 'About Us', disabled: true };

export const ProjectsDefault: Story<LabelProps> = (args) => React.createElement(Label, args);
ProjectsDefault.args = { ...defaultLabelProps, text: 'Our Projects' };
ProjectsDefault.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const label = await canvas.getByText(args.text);
  await userEvent.hover(label);
  await new Promise((r) => setTimeout(r, 500));
  await userEvent.click(label);
  await new Promise((r) => setTimeout(r, 500));
};

export const ProjectsDisabled: Story<LabelProps> = (args) => React.createElement(Label, {...args, disabled: true});
ProjectsDisabled.args = { ...defaultLabelProps, text: 'Our Projects', disabled: true };
