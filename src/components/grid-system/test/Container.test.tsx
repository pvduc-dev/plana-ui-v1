import { render, screen } from '@testing-library/react';
import { Container } from '../Container';

describe('<Container/>', function () {
  it('should be renders without errors', function () {
    render(<Container/>);
    const containerElement = screen.getByTestId('container');
    expect(containerElement).toBeInTheDocument();
  });
});
