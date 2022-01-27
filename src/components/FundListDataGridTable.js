import { LinearProgress } from '@mui/material';
import { connect } from 'react-redux';
import { fundListColumns } from '../helpers/tableHelper';
import DataGridComponent from './DataGridComponent';

const FundListDataGridTable = (props) => {
  const { fundList } = props;

  return (
    fundList.length ? (
      <DataGridComponent 
        columns={fundListColumns} 
        rows={fundList} 
      />
    ) : <LinearProgress />
  );
}

const mapStateToProps = (state) => ({
  fundList: state.tumeloFakeData.fundList
})

export default connect(mapStateToProps, null)(FundListDataGridTable);
