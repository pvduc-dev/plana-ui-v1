import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from '../Table';

export default {
  title: 'Component/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  headers: [
    {
      id: 'firstName',
      title: 'First name',
      value: 'firstName',
    },
    {
      id: 'lastName',
      title: 'Last name',
      value: 'lastName',
    },
  ],
  data: [{
    firstName: 'Pv',
    lastName: 'Duc',
  },
  {
    lastName: 'Duc',
  },
  ],
};
