import React, { useState, useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import DataGridComponent from './DataGridComponent';
import { fundListColumns, voteRecordsColumns } from './tableHelper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Table = () => {
  const [fundList, setFundList] = useState([]);
  const [voteRecords, setVoteRecords] = useState([]);  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Fund List" {...a11yProps(0)} />
        <Tab label="Voiting Records" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <DataGridComponent columns={fundListColumns} rows={fundList} />
    </TabPanel>
    <TabPanel value={value} index={1}>
    <DataGridComponent columns={voteRecordsColumns} rows={voteRecords} />
    </TabPanel>
  </Box>
  );
}

export default Table;
