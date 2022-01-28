import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { usePapaParse } from 'react-papaparse';

import { setVoteRecords, setFundList } from '../redux/actions';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import VoteRecordsGridTable from './VoteRecordsGridTable';
import FundListDataGridTable from './FundListDataGridTable';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
    <>
      <Box display="flex" alignItems="flex-end" justifyContent="space-between" sx={{ width: '100%' }}>
        <Tabs 
          value={value} 
          indicatorColor="secondary"
          textColor="primary" 
          onChange={handleChange}
        >
          <Tab label="Voiting Records" />
          <Tab label="Fund List" />
        </Tabs>

        <Box display="flex" alignItems="flex-start">
          <SearchOutlinedIcon />
        </Box>
      </Box>

      {value === 0 ? (<VoteRecordsGridTable />) : <FundListDataGridTable />}
    </>


  );
}

const mapDispatchToProps = {
  setVoteRecords,
  setFundList
}

export default connect(null, mapDispatchToProps)(Main);
