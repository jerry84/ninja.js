import React from 'react'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  function onPageClick(event) {
    event.preventDefault();
    onChange(pageNumber);
  }

  const className = currentPageNumber === pageNumber ? 'page-link' : 'page-link button-outline';

  return (
    <li className="page-item mr-1">
      <button className={className} onClick={onPageClick}>{pageNumber + 1}</button>
    </li>
  );
}

export default Page;
