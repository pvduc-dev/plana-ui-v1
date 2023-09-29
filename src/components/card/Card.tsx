import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { tailwind } from '../../utils/tailwindcss';
import { isNumber } from 'lodash-es';

interface CardProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className, width }) => {
  const cardClasses = useMemo(() => tailwind(
    'flex',
    'flex-col',
    'rounded-lg',
    'bg-white',
    'text-lg',
    'clear-left',
    className,
  ), [className]);

  const cardWidth = useMemo(() => {
    if (isNumber(width)) {
      return `${width / 16}rem`;
    }
    return width;
  }, [width]);
  return (
    <div
      style={{
        width: cardWidth,
      }}
      className={cardClasses}
      data-testid="card"
    >
      {children}
    </div>
  );
};

export { Card };
