import React from 'react'

import Page from './Page'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = Array.from(Array(totalNumberOfPages).keys());

  return pages.length > 1 ? (
    <ul className="pagination">
      {pages.map(pageNumber => (
        <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange} />
      ))}
    </ul>
  ) : null;
}

export default Pagination;
