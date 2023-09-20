import { Column } from '../Column';
import { render, screen } from '@testing-library/react';

describe('<Column/>', function () {
  it('should be renders without errors', function () {
    render(<Column/>);
    const columnElement = screen.getByTestId('column');
    expect(columnElement).toBeInTheDocument();
  });
});
