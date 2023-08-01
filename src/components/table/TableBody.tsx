import { flexRender, RowModel } from '@tanstack/react-table';

interface TableBodyProps {
  rowModel: RowModel<any>
}

const TableBody = ({ rowModel }: TableBodyProps) => {
  return (
    <tbody>
    {rowModel.rows.map((row) => (
      <tr
        key={row.id}
      >
        {row.getVisibleCells().map(cell => (
          <td
            key={cell.id}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
    </tbody>
  );
};

export default TableBody;
