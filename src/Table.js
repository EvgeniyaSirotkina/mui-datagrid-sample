import React, { useState, useEffect } from 'react';

import DataGridComponent from './DataGridComponent';
import { fundListColumns, voteRecordsColumns } from './tableHelper';

const Table = () => {
  const [fundList, setFundList] = useState([]);
  const [voteRecords, setVoteRecords] = useState([]);  

  useEffect(function getData() {
    fetch('https://raw.githubusercontent.com/EvgeniyaSirotkina/demojsondata/main/db.json')
        .then(response => response.json())
        .then(data => {
          data.fundList && setFundList(data.fundList);
          data.voteRecords && setVoteRecords(data.voteRecords);
        })
        .catch(error => {
            console.log(error);
        })
    // eslint-disable-next-line
    }, []);

  return (
    <>
      <DataGridComponent columns={fundListColumns} rows={fundList} />
      <DataGridComponent columns={voteRecordsColumns} rows={voteRecords} />
    </>
  );
}

export default Table;
