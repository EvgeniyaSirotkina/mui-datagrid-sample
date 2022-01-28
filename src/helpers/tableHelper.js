import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const StyledRating = styled(Rating)({
  '& .MuiRating-icon': {
    color: '#1D8B8D',
  },
});

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
        renderCell: (params) => (
          <StyledRating
            name="significance-value"
            defaultValue={Number.parseInt(params.value)}
            max={4}
            readOnly
            icon={<CircleIcon fontSize="inherit" />}
            emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
          />
        ),
        flex: 1,
    },
    {
        field: 'significance_calc',
        headerName: 'Significance Calc',
        valueGetter: (params) => {
          const topTenHoldingsValue = params.row.topTenHoldings === 'True' ? 1 : 0;
          const assetAndCompanyDifferentlyValue = params.row.assetAndCompanyDifferently === 'True' ? 1 : 0;
          const managerVotedDifferentlyForTheSameProposalValue = params.row.managerVotedDifferentlyForTheSameProposal === 'True' ? 1 : 0;
          const managerMarkedSignificantValue = params.row.managerMarkedSignificant === 'True' ? 1 : 0;

          return topTenHoldingsValue + assetAndCompanyDifferentlyValue + managerMarkedSignificantValue + managerVotedDifferentlyForTheSameProposalValue;
        },
        renderCell: (params) => (
          <StyledRating
            name="significance-value"
            defaultValue={Number.parseInt(params.value)}
            max={4}
            readOnly
            icon={<CircleIcon fontSize="inherit" />}
            emptyIcon={<CircleOutlinedIcon fontSize="inherit" />}
          />
        ),
        flex: 1,
    },
];