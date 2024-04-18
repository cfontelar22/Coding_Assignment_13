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

const TableHeader = () => React.createElement("thead", null, 
  React.createElement("tr", null, 
    React.createElement("th", null, "Category")
  )
);

const TableFooter = () => React.createElement("tfoot", null, 
  React.createElement("tr", null, 
    React.createElement("td", null, `Total categories: ${categories.length}`)
  )
);

const TableCell = ({ category }: { category: string }) => React.createElement("tr", null, 
  React.createElement("td", null, category)
);

export const Default: Story<TableProps> = (args) => React.createElement(Table, args,
  React.createElement(TableHeader, null),
  React.createElement("tbody", null, 
    args.categories.map((category, index) => React.createElement(TableCell, { key: index, category: category }))
  ),
  React.createElement(TableFooter, null)
);
Default.args = {
  categories,
};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  for (const category of args.categories) {
    const categoryCell = await canvas.getByText(category);
    await userEvent.hover(categoryCell);
    await userEvent.click(categoryCell);
  }
};

export const Disabled: Story<TableProps> = (args) => React.createElement(Table, args,
  React.createElement(TableHeader, null),
  React.createElement("tbody", null, 
    args.categories.map((category, index) => React.createElement(TableCell, { key: index, category: category }))
  ),
  React.createElement(TableFooter, null)
);
Disabled.args = {
  categories,
  disabled: true,
};

