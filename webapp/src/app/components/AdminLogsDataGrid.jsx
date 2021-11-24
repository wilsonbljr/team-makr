import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 60
    },
    {
        field: 'level',
        headerName: 'Level',
        width: 70
    },
    {
        field: 'message',
        headerName: 'Message',
        width: 400
    },
    {
        field: 'timestamp',
        headerName: 'Time',
        width: 200
    },
]


const AdminLogsDataGrid = (props) => {
    return (
        <DataGrid
            autoHeight={true}
            rows={props.logs}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableColumnFilter
            disableColumnMenu
            components={{
                NoRowsOverlay: () => (
                    <Stack height="100%" sx={{pt: 10}} alignItems="center" justifyContent="center">
                        No rows in DataGrid
                    </Stack>
                ) }}
        />
    )
}

export default AdminLogsDataGrid;