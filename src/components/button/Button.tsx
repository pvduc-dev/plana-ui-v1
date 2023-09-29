import type { FC, PropsWithChildren, RefObject } from 'react';
import { useMemo, useRef } from 'react';
import type { AriaButtonProps } from '@react-types/button';
import { useButton } from 'react-aria';
import { tailwind } from '../../utils/tailwindcss';

interface ButtonProps extends AriaButtonProps {
  execute?: () => void;
  canExecute?: true;
  isBlock?: boolean;
  color?: string;
  isLoading?: boolean;
  className?: string,
  isDisabled?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  isBlock = false,
  isLoading = false,
  isDisabled = false,
  className,
  color = 'primary',
  children,
  ...otherProps
}) => {
  const isDisabledCompute = useMemo<boolean>(() => isDisabled || isLoading, [isDisabled, isLoading]);
  const buttonRef = useRef(null) as RefObject<HTMLButtonElement>;

  const { buttonProps } = useButton({
    ...otherProps,
    isDisabled: isDisabledCompute,
  }, buttonRef);

  const buttonClassName = useMemo(() => tailwind(
    'text-white',
    'text-sm',
    'px-4',
    'py-2',
    'min-w-[5.75rem]',
    'rounded-md',
    'outline-none',
    'font-medium',
    {
      'block': isBlock,
      'bg-primary': color === 'primary',
      'hover:bg-darken-primary': color === 'primary',
      'active:bg-primary': color === 'primary',
      'bg-success': color === 'success',
      'bg-info': color === 'info',
      'bg-warning': color === 'warning',
      'bg-danger': color === 'danger',
      'bg-secondary': color === 'secondary',
      'font-medium': color === 'secondary',
      'text-black': color === 'secondary',
    },
    className,
  ), [className, color, isBlock]);
  return (
    <button
      {...buttonProps}
      className={buttonClassName}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
