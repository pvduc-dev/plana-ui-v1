import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button/>', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should be render with children', async function () {
    const component = render(
      <Button>
        Button
      </Button>);
    expect(component.baseElement).toBeInTheDocument();
  });
});
