import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button/>', () => {
  it('should be defined', function () {
    expect(Button).toBeDefined();
  });
  it('should be render with children', async function () {
    const component = render(
      <Button>
        Submit
      </Button>);
    expect(component.getByRole('button').innerHTML).toBe('Submit');
  });
});
