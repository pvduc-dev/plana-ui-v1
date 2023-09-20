import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

interface CardProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className, width }) => {
  const cardClassName = useMemo(() => classNames(
    tailwindcss['rounded-lg'],
    tailwindcss['border'],
    tailwindcss['border-black'],
    tailwindcss['p-2'],
    className,
  ), [className]);
  return (
    <div
      style={{
        width: width,
      }}
      className={cardClassName}
    >
      {children}
    </div>
  );
};

export { Card };
