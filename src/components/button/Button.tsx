import type { FC, PropsWithChildren } from 'react';

// Test
// const BASE_BUTTON_CLASS = classNames(
//   tailwindcss['block']
// )

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
