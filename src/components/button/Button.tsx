import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';

interface ButtonProps {
  isDisabled?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children }) => {
  return (
    <button role="button">
      {children}
    </button>
  );
};

export default Button;
