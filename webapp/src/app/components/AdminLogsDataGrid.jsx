import React, { useEffect, useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { getLogs } from '../../core/services/logs.service';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50
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


const AdminLogsDataGrid = () => {
    const { token } = useAuth();
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        getLogs(setLogs, token);
    }, [token])

    return (
        <DataGrid
            autoHeight={true}
            rows={logs}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableColumnFilter
            disableColumnMenu
        />
    )
}

export default AdminLogsDataGrid;