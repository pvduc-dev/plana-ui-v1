import { render, screen } from '@testing-library/react';
import { Table } from '../Table';
import React from 'react';

describe('<Table/>', function () {
  it('should be renders without errors', () => {
    render(
      <Table
        data={[[{
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
        ]]}
        headers={[
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
        ]}
      />);
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toBeInTheDocument();
  });
});
