import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button/>', () => {
  it('should be renders without errors', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should be disabled when isDisabled prop is true', () => {
    render(<Button isDisabled>Click me</Button>);
    const buttonElement = screen.getByTestId('button');

    expect(buttonElement).toBeDisabled();
  });

  it('should be disabled when isLoading prop is true', () => {
    render(<Button isLoading>Click me</Button>);
    const buttonElement = screen.getByTestId('button');

    expect(buttonElement).toBeDisabled();
  });

  it('should be has a custom class when className prop is provided', () => {
    render(<Button className="custom-class">Click me</Button>);
    const buttonElement = screen.getByTestId('button');

    expect(buttonElement).toHaveClass('custom-class');
  });

  it('should be applies the correct background color based on the color prop', () => {
    render(<Button color="primary">Click me</Button>);
    const buttonElement = screen.getByTestId('button');

    expect(buttonElement).toHaveClass('bg-primary');
  });

  it('should be applies the correct background color on hover for primary color', () => {
    render(<Button color="primary">Click me</Button>);
    const buttonElement = screen.getByTestId('button');

    fireEvent.mouseEnter(buttonElement);

    expect(buttonElement).toHaveClass('hover:bg-darken-primary');
  });
});
