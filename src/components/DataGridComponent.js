import { DataGrid } from '@mui/x-data-grid';

const DataGridComponent = (props) => {
  return (
    <div style={{ height: 650 }}>
      <DataGrid
        {...props}
        pageSize={25}
        rowsPerPageOptions={[25]}
      />
    </div>
  );
}

export default DataGridComponent;
