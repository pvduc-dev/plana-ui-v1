import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

import type { FC, PropsWithChildren } from 'react';

const BASE_ROW_CLASS = classNames(
  tailwindcss.flex,
  tailwindcss['flex-row'],
  tailwindcss['flex-wrap'],
  tailwindcss['-ml-6'],
  tailwindcss['-mr-6'],
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RowProps {
}

const Row: FC<PropsWithChildren<RowProps>> = ({ children }) => {
  return (
    <div
      className={BASE_ROW_CLASS}
      data-testid="row"
    >
      {children}
    </div>
  );
};

export { Row };
