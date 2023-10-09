import { flexRender, RowModel } from '@tanstack/react-table';
import classNames from 'classnames';
import tailwindcss from '../../styles/tailwind.module.css';

interface TableBodyProps {
  rowModel: RowModel<any>
}

const TableBody = ({ rowModel }: TableBodyProps) => {
  return (
    <tbody
      className={
        classNames(
          tailwindcss['bg-white'],
        )
      }
    >
    {rowModel.rows.map((row) => (
      <tr
        key={row.id}
      >
        {row.getVisibleCells().map(cell => {
          return (
            <td
              key={cell.id}
              className={
              classNames(
                tailwindcss['px-2'],
                tailwindcss['py-2'],
                tailwindcss['first:pl-3'],
                tailwindcss['last::pr-3'],
                tailwindcss['border-collapse'],
                tailwindcss['border-b'],
                tailwindcss['border-gray-300'],
              )
            }
            >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>);
        },

        )}
      </tr>
    ))}
    </tbody>
  );
};

export default TableBody;
