import { Dialog } from '../Dialog';
import { render, screen } from '@testing-library/react';
import { OverlayProvider } from 'react-aria';

describe('<Dialog/>', () => {
  it('should be render without errors', () => {
    render(
      <OverlayProvider>
        <Dialog
          isOpen
        >
          <div>Test</div>
        </Dialog>,
      </OverlayProvider>,
    );
    const dialogElement: HTMLDivElement = screen.getByTestId('dialog');
    expect(dialogElement).toBeInTheDocument();
  });
});
