import React from 'react';
import type { FC, PropsWithChildren } from 'react';

interface ButtonProps {
  isDisabled?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children }) => {
  // TODO: Implement
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;
