import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

interface CardProps {
  className: string;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className }) => {
  const cardClassName = useMemo(() => classNames(
    tailwindcss['rounded-lg'],
    className,
  ), [className]);
  return (
    <div
      className={cardClassName}
    >
      {children}
    </div>
  );
};

export default Card;
