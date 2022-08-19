import React from 'react'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

function DataTable({ rows: totalRows, rowsPerPage = 40 }) {
  const [rows, setRows] = React.useState(totalRows);
  const [currentPageNumber, setCurrentPageNumber] = React.useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = React.useState(calculateTotalNumberOfPages(totalRows));

  function calculateTotalNumberOfPages(rows) {
    return Math.ceil(rows.length / rowsPerPage);
  }

  function onSearch(event) {
    const text = (event.target.value || '').toLowerCase();

    const rowsFound = text ? totalRows.filter(({ name1, email }) => {
      return name1.toLowerCase().search(text) > -1 || email?.toLowerCase().search(text) > -1
    }) : totalRows;

    setRows(rowsFound);
    setCurrentPageNumber(0);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound));
  }

  function onChangeToPageNumber(pageNumber) {
    setCurrentPageNumber(pageNumber);
  }

  function rowsInPageNumber(pageNumber) {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  }

  const rowsToRender = rows.slice(...rowsInPageNumber(currentPageNumber));

  return(
    <div>
      <Search onSearch={onSearch} />
      <table>
        <tbody>
          {rowsToRender.map(row => <Row key={row.per_id} row={row} />)}
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={onChangeToPageNumber} />
    </div>
  );
}

export default DataTable;
