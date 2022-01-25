export const fundListColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'guid', headerName: 'GUID', width: 90 },
    {
      field: 'fundName',
      headerName: 'Fund Name',
      width: 150,
    },
    {
      field: 'manager',
      headerName: 'Manager',
      width: 150,
    },
    {
      field: 'fundExposureM',
      headerName: 'Fund Exposure (m)',
      description: 'Some description',
      type: 'number',
      width: 110,
    },
    {
      field: 'fundExposurePerc',
      headerName: 'Fund Exposure (%)',
      description: 'Some description',
      type: 'number',
      width: 110,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'lastUpdatedDate',
      headerName: 'Last Updated Date',
      width: 150,
    },
  ];

  export const voteRecordsColumns = [ 
    {
        field: 'id',
        headerName: 'ID',
    },
    {
        field: 'guid',
        headerName: 'Guid',
    }, 
    {
        field: 'holdings',
        headerName: 'Holdings',
    }, 
    {
        field: 'fund',
        headerName: 'Fund',
    }, 
    {
        field: 'assetManager',
        headerName: 'Asset Manager',
    }, 
    {
        field: 'fundExposurePerc',
        headerName: 'Fund Exposure (m)',
    }, 
    {
        field: 'clientInvestd',
        headerName: 'Client Invested',
    }, 
    {
        field: 'totalAssets',
        headerName: 'Total Assets',
    }, 
    {
        field: 'meetingType',
        headerName: 'Meeting Type',
    }, 
    {
        field: 'meetingDate',
        headerName: 'Date',
    }, 
    {
        field: 'proposalText',
        headerName: 'Proposal Text',
    }, 
    {
        field: 'topTenHoldings',
        headerName: 'Top 10 Holdings',
    }, 
    {
        field: 'assetAndCompanyDifferently',
        headerName: 'Asset And Company Vote Differently',
    }, 
    {
        field: 'managerVotedDifferentlyForTheSameProposal',
        headerName: 'Manager Voted Differently For The Same Proposal',
    }, 
    {
        field: 'managerMarkedSignificant',
        headerName: 'Manager Marked Significant',
    }, 
    {
        field: 'significance',
        headerName: 'Significance',
    }, 
    {
        field: 'rationale',
        headerName: 'Rationale',
    },
];