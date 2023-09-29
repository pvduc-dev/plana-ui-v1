import { PinCodeInput } from '../PinCodeInput';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('</PinCodeInput/>', () => {
  it('should be renders without errors', () => {
    render(
      <PinCodeInput/>,
    );
    const pinCodeInputElement = screen.getByTestId('pin-code-input');
    expect(pinCodeInputElement).toBeInTheDocument();
  });
});
