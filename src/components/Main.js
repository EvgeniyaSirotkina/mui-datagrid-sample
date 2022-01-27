import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { usePapaParse } from 'react-papaparse';

import { setVoteRecords, setFundList } from '../redux/actions';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import VoteRecordsGridTable from './VoteRecordsGridTable';
import { TabPanel } from './TabPanel';
import FundListDataGridTable from './FundListDataGridTable';

const Main = (props) => {
  const [value, setValue] = React.useState(0);
  const { readRemoteFile  } = usePapaParse();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(function getData() {
    fetch('https://raw.githubusercontent.com/EvgeniyaSirotkina/testjsondata/main/fundList.json')
        .then(response => response.json())
        .then(data => data.fundList && 
          props.setFundList(data.fundList))
        .catch(error => console.log(error))

    readRemoteFile('/mui-datagrid-sample/storage/voteRecords.csv', {
      complete: (results) => {
        const data = results.data.map(item => ({
          id: item[0],
          holdings: item[1],
          fund: item[2],
          assetManager: item[3],
          fundExposurePerc: item[4],
          clientInvestd: item[5],
          totalAssets: item[6],
          meetingType: item[7],
          meetingDate: item[8],
          topTenHoldings: item[9],
          assetAndCompanyDifferently: item[10],
          managerVotedDifferentlyForTheSameProposal: item[11],
          managerMarkedSignificant: item[12],
          significance: item[13],
        }));

        props.setVoteRecords(data);
      },
    });

    // eslint-disable-next-line
    }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Voiting Records" {...a11yProps(0)} />
          <Tab label="Fund List" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <VoteRecordsGridTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FundListDataGridTable />
      </TabPanel>
    </Box>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const mapDispatchToProps = {
  setVoteRecords,
  setFundList
}

export default connect(null, mapDispatchToProps)(Main);
