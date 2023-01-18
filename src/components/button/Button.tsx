import type { FC, PropsWithChildren, RefObject } from 'react';
import { useMemo, useRef } from 'react';
import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';
import type { AriaButtonProps } from '@react-types/button';
import { useButton } from 'react-aria';

interface ButtonProps extends AriaButtonProps {
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

  const buttonClassName = useMemo(() => classNames(
    tailwindcss['text-white'],
    tailwindcss['text-sm'],
    tailwindcss['font-medium'],
    tailwindcss['px-5'],
    tailwindcss['py-2.5'],
    tailwindcss['min-w-[5.5rem]'],
    tailwindcss['rounded-md'],
    tailwindcss['outline-none'],
    {
      [tailwindcss['block']]: isBlock,
      [tailwindcss['bg-primary']]: color === 'primary',
      [tailwindcss['hover:bg-darken-primary']]: color === 'primary',
      [tailwindcss['active:bg-primary']]: color === 'primary',
      [tailwindcss['bg-success']]: color === 'success',
      [tailwindcss['bg-info']]: color === 'info',
      [tailwindcss['bg-warning']]: color === 'warning',
      [tailwindcss['bg-danger']]: color === 'danger',
      [tailwindcss['bg-secondary']]: color === 'secondary',
      [tailwindcss['font-normal']]: color === 'secondary',
      [tailwindcss['text-black']]: color === 'secondary',
    },
    className,
  ), [className, color, isBlock]);
  return (
    <button
      {...buttonProps}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};

export default Button;
