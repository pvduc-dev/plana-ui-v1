import { render, screen } from '@testing-library/react';
import { Table } from '../Table';
import React from 'react';

describe('<Table/>', function () {
  it('should be renders without errors', () => {
    const headers = [
      { id: 'id', title: 'ID', value: 'id' },
      { id: 'name', title: 'Name', value: (rowData: { name: string; }) => rowData.name, render: (value: string) => value },
      { id: 'name' },
    ];
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    render(
      <Table
        headers={headers}
        data={data}
      />);
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toBeInTheDocument();
  });
  it('should be has a custom class when className prop is provided', () => {
    render(
      <Table
        headers={[]}
        data={[]}
        className="custom-class"
      />);
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toHaveClass('custom-class');
  });
  it('should be renders table with correct structure', () => {
    const headers = [
      { id: 'id', title: 'ID', value: 'id' },
      { id: 'name', title: 'Name', value: 'name' },
    ];
    const data = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    render(
      <Table
        headers={headers}
        data={data}
      />,
    );
    headers.forEach((header) => {
      const headerElement = screen.getByText(header.title);
      expect(headerElement).toBeInTheDocument();
    });
    data.forEach((rowData: Record<string, string | number>) => {
      headers.forEach((header) => {
        const cellValue = rowData[header.id];
        const cellElement = screen.getByText(cellValue);
        expect(cellElement).toBeInTheDocument();
      });
    });
  });
});
