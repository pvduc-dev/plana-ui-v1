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
      id: 'id',
      title: 'ID',
      value: 'id',
    },
    {
      id: 'name',
      title: 'Client name',
      value: (obj) => (obj.name as string)?.toUpperCase(),
    },
    {
      id: 'expiredAt',
      title: 'Expired At',
      value: 'expiredAt',
    },
    {
      id: 'issuedAt',
      title: 'Issued At',
      value: 'issuedAt',
    },
    {
      id: 'issuedBy',
      title: 'Issued By',
      value: 'issuedBy',
    },
    {
      id: 'action',
      render: () => <span>Edit | Delete</span>,
    },
  ],
  data: [{
    id: '0d6b4a04-3e56-4495-be47-3235d486448e',
    name: 'Chat test',
  },
  {
    id: '05339d32-524d-4703-ba23-b2846dc70528',
    lastName: 'Duc',
  },
  ],
};
