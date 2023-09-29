import { Card } from '../Card';
import { render } from '@testing-library/react';

describe('<Card/>', () => {
  it('should be render without errors', () => {
    const { getByTestId } = render(
      <Card/>,
    );
    const cardElement: HTMLElement = getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });

  it('should be has a custom class when className prop is provided', () => {
    const { getByTestId } = render(<Card className="custom-class"/>);
    const cardElement: HTMLElement = getByTestId('card');

    expect(cardElement).toHaveClass('custom-class');
  });

  it('should be applies the correct width on the width prop as a number', () => {
    const { getByTestId } = render(
      <Card
        width={300}
      />,
    );
    const cardElement: HTMLElement = getByTestId('card');
    expect(cardElement).toHaveStyle({
      width: `${300 / 16}rem`,
    });
  });

  it('should be applies the correct width on the width prop as a string', () => {
    const { getByTestId } = render(
      <Card
        width="300px"
      />,
    );
    const cardElement: HTMLElement = getByTestId('card');
    expect(cardElement).toHaveStyle({
      width: '300px',
    });
  });
});
