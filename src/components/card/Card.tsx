import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { tailwind } from '../../utils/tailwindcss';

interface CardProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className, width }) => {
  console.log(tailwindcss);
  const cardClasses = useMemo(() => tailwind(
    'flex',
    'flex-col',
    'rounded-lg',
    'bg-white',
    'text-lg',
    'clear-left',
  ), []);
  return (
    <div
      style={{
        width: width,
      }}
      className={cardClasses}
      data-testid="card"
    >
      {children}
    </div>
  );
};

export { Card };
