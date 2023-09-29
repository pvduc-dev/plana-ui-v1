import { useState } from 'react';
import { usePinInput } from 'react-pin-input-hook';

import tailwindcss from '../../styles/tailwind.module.css';

import type { FC } from 'react';
import classNames from 'classnames';

interface PinCodeInputProps {
  length?: number;
}

const PinCodeInput: FC<PinCodeInputProps> = ({ length = 4 }) => {
  const { fields } = usePinInput({
    defaultValues: Array(length).fill(''),
    placeholder: '',
    autoFocus: true,
    type: 'numeric',
    otp: true,
  });
  return (
    <div
      data-testid="pin-code-input"
    >
      {fields.map((propsField, index) => (
        <input
          key={index}
          {...propsField}
          className={
            classNames(
              tailwindcss['mx-1'],
              tailwindcss['rounded'],
              tailwindcss['w-12'],
              tailwindcss['h-12'],
              tailwindcss['text-center'],
              tailwindcss['outline-none'],
              tailwindcss['text-lg'],
              tailwindcss['shadow-outer'],
            )
          }
        />
      ))}
    </div>
  );
};

export { PinCodeInput };
