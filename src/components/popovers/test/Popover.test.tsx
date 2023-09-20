import { act, screen } from '@testing-library/react';
import { Popover } from '../Popover';
import ReactDOM from 'react-dom/client';

describe('<Popover/>', function () {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
  });
  it('should be renders without errors', async () => {
    await act(() => {
      ReactDOM.createRoot(container).render(<Popover/>);
    });
    const popoverElement = screen.getByTestId('popover');
    expect(popoverElement).toBeInTheDocument();
  });
});
