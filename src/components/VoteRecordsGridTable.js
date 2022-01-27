import { LinearProgress } from '@mui/material';
import { connect } from 'react-redux';
import { voteRecordsColumns } from '../helpers/tableHelper';
import { CustomToolbar } from './CustomToolbar';
import DataGridComponent from './DataGridComponent';

const VoteRecordsGridTable = (props) => {
  const { voteRecords } = props;

  return (
    voteRecords.length ? (
    <DataGridComponent 
      columns={voteRecordsColumns} 
      rows={voteRecords} 
      components={{
        Toolbar: CustomToolbar,
      }} 
    />) : <LinearProgress />
  );
}

const mapStateToProps = state => {
  return {
    voteRecords: state.tumeloFakeData.voteRecords
  }
}

export default connect(mapStateToProps, null)(VoteRecordsGridTable);
