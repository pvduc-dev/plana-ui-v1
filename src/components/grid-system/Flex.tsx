import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';
import { useMemo } from 'react';

interface FlexProps {
  direction?: 'row' | 'column'
}

const Flex: FC<PropsWithChildren<FlexProps>> = ({ direction = 'row', children }) => {
  const flexClassName = useMemo(() => classNames(
    tailwindcss.flex,
    {
      [tailwindcss['flex-row']]: direction === 'row',
      [tailwindcss['flex-col']]: direction === 'column',
    },
  ), [direction]);

  return (
    <div
      className={flexClassName}
    >
      {children}
    </div>
  );
};

export default Flex;
