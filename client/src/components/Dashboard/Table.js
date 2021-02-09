import React, { useState } from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { showVisiblePages } from "../../utils/showVisblePages";
import { StyledInput } from "../Forms/styles";

import { StyledPagiantion, TableWrapper } from "./style";

export default function Table({ columns, data, filterBy }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
    usePagination
  );
  const [active, setActive] = useState(pageIndex);
  const [filterInput, setFilterInput] = useState("");

  // array of visible pages
  const visiblePage = showVisiblePages(pageIndex + 1, pageCount);
  // searching by username
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter(`${filterBy}`, value);
    setFilterInput(value);
  };

  return (
    <TableWrapper>
      <StyledInput
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          marginTop: "5%",
        }}
      >
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        {visiblePage.map((page, i) => {
          function setPageAndActive() {
            setActive(page - 1);
            gotoPage(page - 1);
          }
          return (
            <StyledPagiantion
              key={page}
              onClick={setPageAndActive}
              className={active === i ? "active" : ""}
            >
              <p>{page}</p>
            </StyledPagiantion>
          );
        })}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
      </div>
    </TableWrapper>
  );
}
