import type { FC } from 'react';
import { useRef } from 'react';
import type { AriaBreadcrumbItemProps } from 'react-aria';
import { useBreadcrumbItem } from 'react-aria';
import { Link } from 'react-router-dom';

import tailwindcss from '../../styles/tailwind.module.css';
import classNames from 'classnames';

type BreadcrumbItemProps = AriaBreadcrumbItemProps & {
  to: string;
  isCurrent: boolean;
};

const BreadcrumbsItem: FC<BreadcrumbItemProps> = ({ to, isCurrent, ...props }) => {
  const ref = useRef<HTMLElement>(null);
  const { itemProps } = useBreadcrumbItem({ ...props, elementType: 'span' }, ref);
  return (
    <li
      className={
        classNames(
          tailwindcss['flex'],
          tailwindcss['items-center'],
        )
      }
    >
      <Link
        to={to}
        {...itemProps}
        className={
          classNames(
            tailwindcss['outline-none'],
            {
              [tailwindcss['text-gray-700']]: !isCurrent,
            },
          )
        }
      >
        {props.children}
      </Link>
      {!isCurrent && (
        <span
          className={
            classNames(
              tailwindcss['mx-1.5'],
              tailwindcss['text-base'],
            )
          }
        >/</span>
      )}
    </li>
  );
};

export default BreadcrumbsItem;
