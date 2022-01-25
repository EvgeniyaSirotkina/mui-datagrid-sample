import { DataGrid } from '@mui/x-data-grid';

const DataGridComponent = (props) => {
  const { columns, rows } = props;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
      />
    </div>
  );
}

export default DataGridComponent;
