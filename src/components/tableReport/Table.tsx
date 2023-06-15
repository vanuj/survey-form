import React, { FC } from "react";
import { useTable } from "react-table";
import * as S from "./Table.style";

const Table: FC<{ columns?: any; data?: any }> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data });

  return (
    <S.StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <S.StyledTableHeader {...column.getHeaderProps()}>
                {column.render("Header")}
              </S.StyledTableHeader>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <S.StyledTableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </S.StyledTableCell>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((group) => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <S.StyledTableCell {...column.getFooterProps()}>
                {column.render("Footer")}
              </S.StyledTableCell>
            ))}
          </tr>
        ))}
      </tfoot>
    </S.StyledTable>
  );
};

export default Table;
