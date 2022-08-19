import React from 'react';
import DataTable from './DataTable';
import './App.css';
import { LOCALE, ROWS_PER_PAGE } from './config';

function App(props) {
  return (
    <div className="container mt-3">
      <DataTable rows={props.rows} locale={LOCALE} rowsPerPage={ROWS_PER_PAGE} />
    </div>
  );
}

export default App;
