import { Children, cloneElement } from 'react';
import { useBreadcrumbs } from '@react-aria/breadcrumbs';

import type { FC, PropsWithChildren, ReactElement } from 'react';
import type { AriaBreadcrumbsProps } from '@react-types/breadcrumbs';

type BreadcrumbsProps = AriaBreadcrumbsProps;

const Breadcrumbs: FC<PropsWithChildren<BreadcrumbsProps>> = (props) => {
  const { navProps } = useBreadcrumbs(props);
  const children = Children.toArray(props.children);
  return (
    <nav
      {...navProps}
    >
      <ol
        className="flex"
      >
        {children.map((child, idx) =>
          cloneElement(child as ReactElement, { isCurrent: idx === children.length - 1 } as object),
        )}
      </ol>
    </nav>
  );
};

export { Breadcrumbs };
