import { DataGrid } from '@mui/x-data-grid';

const DataGridComponent = (props) => {
  return (
    <div style={{ height: 650 }}>
      <DataGrid
        {...props}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default DataGridComponent;
