import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { useBreadcrumbs } from '@react-aria/breadcrumbs';
import { AriaBreadcrumbsProps } from '@react-types/breadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';

import tailwindcss from '../../styles/tailwind.module.css';
import classNames from 'classnames';
import { HomeIcon } from '../icon';

type BreadcrumbsProps = AriaBreadcrumbsProps & {
  items: {
    title: ReactNode;
    to: string;
    isDisabled: boolean;
  }[]
};

const Breadcrumbs: FC<PropsWithChildren<BreadcrumbsProps>> = ({ items, ...props }) => {
  const { navProps } = useBreadcrumbs(props);
  return (
    <nav
      {...navProps}
    >
      <ol
        className={
          classNames(
            tailwindcss['flex'],
            tailwindcss['items-center'],
          )
        }
      >
        <HomeIcon
          className={
            classNames(
              tailwindcss['mr-1.5'],
            )
          }
          size="1rem"
        />
        {items.map(({ title, to }, index) => (
          <BreadcrumbsItem
            key={index}
            to={to}
            isCurrent={index === items.length - 1}
          >
            {title}
          </BreadcrumbsItem>
        ))}
      </ol>
    </nav>
  );
};

export { Breadcrumbs };
