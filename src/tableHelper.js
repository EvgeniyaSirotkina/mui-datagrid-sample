export const fundListColumns = [
    {
      field: 'fundName',
      headerName: 'Fund Name',
      flex: 1,
    },
    {
      field: 'manager',
      headerName: 'Manager',
      flex: 1,
    },
    {
      field: 'fundExposureM',
      headerName: 'Fund Exposure (m)',
      description: 'Some description',
      type: 'number',
      flex: 1,
    },
    {
      field: 'fundExposurePerc',
      headerName: 'Fund Exposure (%)',
      description: 'Some description',
      type: 'number',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'lastUpdatedDate',
      headerName: 'Last Updated Date',
      flex: 1,
    },
  ];

  export const voteRecordsColumns = [
    {
        field: 'holdings',
        flex: 1, 
        renderHeader: () => (
            <strong>
              {'Holdings '}
              <span role="img" aria-label="snowman">
                ☃️
              </span>
            </strong>
          ),
    }, 
    {
        field: 'fund',
        headerName: 'Fund',
        flex: 1,
    }, 
    {
        field: 'assetManager',
        headerName: 'Asset Manager',
        flex: 1,
    }, 
    {
        field: 'fundExposurePerc',
        headerName: 'Fund Exposure (m)',
        flex: 1,
    }, 
    {
        field: 'clientInvestd',
        headerName: 'Client Invested',
        flex: 1,
    }, 
    {
        field: 'totalAssets',
        headerName: 'Total Assets',
        flex: 1,
    }, 
    {
        field: 'meetingType',
        headerName: 'Meeting Type',
        flex: 1,
    }, 
    {
        field: 'meetingDate',
        headerName: 'Date',
        flex: 1,
    }, 
    {
        field: 'proposalText',
        headerName: 'Proposal Text',
        flex: 1,
    }, 
    {
        field: 'topTenHoldings',
        headerName: 'Top 10 Holdings',
        flex: 1,
    }, 
    {
        field: 'assetAndCompanyDifferently',
        headerName: 'Asset And Company Vote Differently',
        flex: 1,
    }, 
    {
        field: 'managerVotedDifferentlyForTheSameProposal',
        headerName: 'Manager Voted Differently For The Same Proposal',
        flex: 1,
    }, 
    {
        field: 'managerMarkedSignificant',
        headerName: 'Manager Marked Significant',
        flex: 1,
    }, 
    {
        field: 'significance',
        headerName: 'Significance',
        flex: 1,
    }, 
    {
        field: 'rationale',
        headerName: 'Rationale',
        flex: 1,
    },
];