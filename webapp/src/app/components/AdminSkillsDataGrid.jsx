import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSkills } from '../../core/hooks/useSkills';

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 220
    },
    {
        field: 'soft_skill',
        headerName: 'Soft Skill',
        type: 'number',
        width: 95
    },
]


const AdminSkillsDataGrid = () => {
    const { allSkills } = useSkills();

    return (
        <DataGrid
            autoHeight={true}
            rows={allSkills}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            disableColumnFilter
            disableColumnMenu
        />
    )
}

export default AdminSkillsDataGrid;