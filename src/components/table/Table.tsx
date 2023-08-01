import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ReactNode, useMemo, useRef } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { AccessorFn } from '@tanstack/table-core/build/lib/types';
import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';


interface Header {
  id: string;
  title: ReactNode;
  value: AccessorFn<any> | string;
  render?: () => ReactNode;
}

interface TableProps {
  headers: Header[],
  data: object[];
}

const Table = ({ headers, data }: TableProps) => {
  const columnHelperRef = useRef(createColumnHelper());
  const columns = useMemo(() => headers.map((header) => {
    const { value } = header;
    const accessor =
      typeof value === 'function' ? value : (originalRow: unknown) => (originalRow as Record<string, unknown>)[value as string];
    return columnHelperRef.current.accessor(accessor, {
      id: header.id,
      header: () => header.title,
    });
  }), [headers]);

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table
      className={
        classNames(
          tailwindcss['border'],
          tailwindcss['border-gray-700'],
          tailwindcss['w-full'],
        )
      }
    >
      <TableHeader
        headerGroups={table.getHeaderGroups()}
      />
      <TableBody
        rowModel={table.getRowModel()}
      />
    </table>
  );
};

export default Table;
