import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

interface ColumnProps {
  cols?: string | number,
  smCols?: string | number,
}

const Column: FC<PropsWithChildren<ColumnProps>> = ({ children }) => {
  const columnClasses = useMemo(() => classNames(
    tailwindcss['grow-0'],
    tailwindcss['shrink-0'],
    tailwindcss['basis-1/3'],
    tailwindcss['ml-3'],
    tailwindcss['mr-3'],
  ), []);

  return (
    <div
      className={columnClasses}
      data-testid="column"
    >
      {children}
    </div>
  );
};

export { Column };
