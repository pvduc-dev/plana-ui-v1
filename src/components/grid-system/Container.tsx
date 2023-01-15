import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

import type { FC, PropsWithChildren } from 'react';

const CONTAINER_BASE_CLASS = classNames(
  tailwindcss.container,
  tailwindcss['w-full'],
  tailwindcss['ml-auto'],
  tailwindcss['mr-auto'],
  tailwindcss['mx-[16rem]'],
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContainerProps {
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  return (
    <div
      className={CONTAINER_BASE_CLASS}
    >
      { children }
    </div>
  );
};

export default Container;
