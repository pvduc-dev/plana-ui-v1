import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Table } from '../Table';

export default {
  title: 'Component/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <div
    style={{ backgroundColor: '#fff', padding: '16px', height: 'calc(100vh - 48px)' }}
  >
    <Table {...args}/>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  headers: [
    {
      id: 'name',
      title: 'Client name',
      value: 'name',
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
      id: 'status',
      title: 'Status',
      value: 'status',
    },
    {
      id: 'issuedBy',
      title: 'Issued By',
      value: 'issuedBy',
    },
    {
      id: 'action',
      render: () => <span><span style={{ color: 'blue' }}>Edit</span> | <span style={{ color: 'red' }}>Delete</span></span>,
    },
  ],
  data: [{
    name: 'Chess game (dev)',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  },
  {
    name: 'Chat test',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  }, {
    name: 'Chess game (dev)',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  },
  {
    name: 'Chat test',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  }, {
    name: 'Chess game (dev)',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  },
  {
    name: 'Chat test',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  }, {
    name: 'Chess game (dev)',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  },
  {
    name: 'Chat test',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  }, {
    name: 'Chess game (dev)',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  },
  {
    name: 'Chat test',
    issuedBy: 'pvduc.dev@gmail.com',
    issuedAt: '20-09-1996',
    status: 'Enable',
    expiredAt: '20-09-1996',
  },
  ],
};
