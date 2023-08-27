import type { HeaderGroup } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

interface TableHeaderProps {
  headerGroups: HeaderGroup<any>[]
}

const TableHeader = ({ headerGroups }: TableHeaderProps) => {
  return (
    <thead>
    {headerGroups.map(headerGroup => (
      <tr
        key={headerGroup.id}
      >
        {headerGroup.headers.map(header => (
          <th
            key={header.id}
            className={
              classNames(
                tailwindcss['border-b'],
                tailwindcss['border-gray-300'],
                tailwindcss['text-gray-600'],
                tailwindcss['font-medium'],
                tailwindcss['text-left'],
                tailwindcss['px-2'],
                tailwindcss['first:pl-3'],
                tailwindcss['last::pr-3'],
                tailwindcss['py-2'],
              )
            }
          >
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
          </th>
        ))}
      </tr>
    ))}
    </thead>
  );
};

export default TableHeader;
