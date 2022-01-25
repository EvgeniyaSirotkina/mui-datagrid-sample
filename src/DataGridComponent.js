import { DataGrid } from '@mui/x-data-grid';

const DataGridComponent = (props) => {
  const { columns, rows } = props;

  return (
    <div style={{ height: 650 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}

export default DataGridComponent;
