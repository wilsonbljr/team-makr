import React from 'react';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { primaryColour } from '../../core/utils/Variables';
import AdminSkillsDataGrid from '../components/AdminSkillsDataGrid';
import { DeleteForever, Edit } from '@mui/icons-material';

const AdminSkillsCard = (props) => {

    return (
        <Card sx={{ width: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5, pr: 3 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Skills
                </Typography>}
            />
            <CardContent>
                <Button endIcon={<AddBoxIcon />} variant='contained' onClick={() => props.addModal(true)} sx={{ mr: 1, mb: 1 }}>Add</Button>
                <Button endIcon={<Edit />} variant='contained' color='info' onClick={() => props.editModal(true)} sx={{ mr: 1, mb: 1 }}>Edit</Button>
                <Button endIcon={<DeleteForever />} variant='contained' color='error' onClick={() => props.deleteModal(true)} sx={{ mb: 1  }}>Remove</Button>
            </CardContent>
            <CardContent sx={{ minHeight: '600px' }}>
                <AdminSkillsDataGrid />
            </CardContent>
        </Card>
    )
};

export default AdminSkillsCard;