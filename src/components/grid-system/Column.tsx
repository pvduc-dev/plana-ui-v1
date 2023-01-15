import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

import type { FC, PropsWithChildren } from 'react';

const BASE_COLUMN_CLASS = classNames(
  tailwindcss['grow-0'],
  tailwindcss['shrink-0'],
  tailwindcss['basis-1/12'],
  tailwindcss['ml-3'],
  tailwindcss['mr-3'],
);

interface ColumnProps {
  cols?: string | number,
  smCols?: string | number,
}

const Column: FC<PropsWithChildren<ColumnProps>> = ({ children }) => {
  return (
    <div
      className={BASE_COLUMN_CLASS}
    >
      {children}
    </div>
  );
};

export default Column;
