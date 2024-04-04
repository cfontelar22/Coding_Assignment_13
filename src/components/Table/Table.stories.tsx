import React from 'react';
import { Story, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Table, { TableProps } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    onClickCategory: { action: 'clicked' },
    onMouseEnter: { action: 'hovered' },
  },
} as Meta<TableProps>;

const categories = ['Brand City', 'Design Avenue', 'Social Media District', 'UX Factory', 'Web Town'];

const TableHeader = () => (
  <thead>
    <tr>
      <th>Category</th>
    </tr>
  </thead>
);

const TableFooter = () => (
  <tfoot>
    <tr>
      <td>Total categories: {categories.length}</td>
    </tr>
  </tfoot>
);

const TableCell = ({ category }: { category: string }) => (
  <tr>
    <td>{category}</td>
  </tr>
);

export const Default: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader />
    <tbody>
      {args.categories.map((category, index) => (
        <TableCell key={index} category={category} />
      ))}
    </tbody>
    <TableFooter />
  </Table>
);
Default.args = {
  categories,
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  for (const category of args.categories) {
    // Hover over each category cell.
    const categoryCell = await canvas.getByText(category);
    await userEvent.hover(categoryCell);
    // Click on each category cell.
    await userEvent.click(categoryCell);
  
  }
};


export const Disabled: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader />
    <tbody>
      {args.categories.map((category, index) => (
        <TableCell key={index} category={category} />
      ))}
    </tbody>
    <TableFooter />
  </Table>
);
Disabled.args = {
  categories,
  disabled: true,
};
// No play function for Disabled as it should not be interactive
