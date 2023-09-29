import { Card } from '../Card';
import { render, screen } from '@testing-library/react';

describe('<Card/>', () => {
  it('should be render without errors', () => {
    render(
      <Card/>,
    );
    const cardElement: HTMLDivElement = screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });
});
