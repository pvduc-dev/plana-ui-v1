import type { HeaderGroup } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

interface TableHeaderProps {
  headerGroups: HeaderGroup<any>[]
}

const TableHeader = ({ headerGroups }: TableHeaderProps) => {
  return (
    <thead>
    {headerGroups.map(headerGroup => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map(header => (
          <th key={header.id}>
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
          </th>
        ))}
      </tr>
    ))}
    </thead>
  );
};

export default TableHeader;
