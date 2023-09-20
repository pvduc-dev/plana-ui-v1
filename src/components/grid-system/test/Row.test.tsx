import { render, screen } from '@testing-library/react';
import { Row } from '../Row';

describe('<Row/>', function () {
  it('should be renders without errors', function () {
    render(<Row/>);
    const rowElement = screen.getByTestId('row');
    expect(rowElement).toBeInTheDocument();
  });
});
