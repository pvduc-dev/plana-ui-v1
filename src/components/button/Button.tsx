import type { FC, PropsWithChildren } from 'react';
import { useMemo, useState } from 'react';
import type { AriaButtonProps } from '@react-types/button';
import { tailwind } from '../../utils/tailwindcss';

interface ButtonProps extends AriaButtonProps {
  isBlock?: boolean;
  color?: string;
  className?: string;
  execute?: () => Promise<void>;
  canExecute?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  isBlock = false,
  execute = () => {},
  canExecute = true,
  className,
  color = 'primary',
  children,
  ...otherProps
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isButtonDisabled = useMemo<boolean>(() => {
    return !canExecute || isLoading;
  }, [canExecute, isLoading]);
  const buttonClasses = useMemo(
    () =>
      tailwind(
        'text-white',
        'text-sm',
        'px-4',
        'py-2',
        'min-w-[5.75rem]',
        'rounded-md',
        'outline-none',
        'font-medium',
        {
          block: isBlock,
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
      ),
    [className, color, isBlock],
  );

  const onClickHandler = async () => {
    setIsLoading(true);
    try {
      await execute();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={buttonClasses}
      disabled={isButtonDisabled}
      onClick={onClickHandler}
      {...otherProps}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
