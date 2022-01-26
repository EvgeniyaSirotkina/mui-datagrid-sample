import React, { useState, useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { GridToolbarContainer, GridToolbarFilterButton, GridToolbarColumnsButton } from '@mui/x-data-grid';

import DataGridComponent from './DataGridComponent';
import { fundListColumns, voteRecordsColumns, voteRecordsExtColumns } from './tableHelper';

const TabPanel = (props) => {
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

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}

const Table = () => {
  const [fundList, setFundList] = useState([]);
  const [voteRecords, setVoteRecords] = useState([]);  
  const [voteRecordsExt, setVoteRecordsExt] = useState([]);  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(function getData() {
    fetch('https://raw.githubusercontent.com/EvgeniyaSirotkina/testjsondata/main/voteRecords.json')
        .then(response => response.json())
        .then(data => data.voteRecords && setVoteRecords(data.voteRecords))
        .catch(error => console.log(error))

    fetch('https://raw.githubusercontent.com/EvgeniyaSirotkina/testjsondata/main/voteRecordsExt.json')
        .then(response => response.json())
        .then(data => data.voteRecordsExtended && setVoteRecordsExt(data.voteRecordsExtended))
        .catch(error => console.log(error))
        
    fetch('https://raw.githubusercontent.com/EvgeniyaSirotkina/testjsondata/main/fundList.json')
        .then(response => response.json())
        .then(data => data.fundList && setFundList(data.fundList))
        .catch(error => console.log(error))

    // eslint-disable-next-line
    }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Fund List" {...a11yProps(0)} />
          <Tab label="Voiting Records" {...a11yProps(1)} />
          <Tab label="Voiting Records Ext" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DataGridComponent columns={fundListColumns} rows={fundList} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <DataGridComponent 
        columns={voteRecordsColumns} 
        rows={voteRecords} 
        components={{
          Toolbar: CustomToolbar,
        }} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <DataGridComponent 
        columns={voteRecordsExtColumns} 
        rows={voteRecordsExt} 
        components={{
          Toolbar: CustomToolbar,
        }} />
      </TabPanel>
    </Box>
  );
}

export default Table;
