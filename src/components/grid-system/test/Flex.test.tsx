import { render, screen } from '@testing-library/react';
import { Flex } from '../Flex';

describe('<Flex/>', function () {
  it('should be renders without errors', function () {
    render(<Flex/>);
    const flexElement = screen.getByTestId('flex');
    expect(flexElement).toBeInTheDocument();
  });
  it('should be applies the correct flex-direction on the direction prop', () => {
    render(<Flex direction="row">Click me</Flex>);
    const flexElement = screen.getByTestId('flex');

    expect(flexElement).toHaveClass('flex-row');
  });
});
