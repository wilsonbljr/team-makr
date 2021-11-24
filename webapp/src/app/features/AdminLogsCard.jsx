import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

import AdminLogsDataGrid from '../components/AdminLogsDataGrid';
import AdminFilterDateForm from '../components/AdminFilterDateForm';

import { primaryColour } from '../../core/utils/Variables';

const AdminLogsCard = (props) => {
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState('')

    return (
        <Card sx={{ width: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5, pr: 3 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Logs
                </Typography>}
            />
            <CardContent>
                <AdminFilterDateForm initialDate={initialDate} setInitialDate={setInitialDate} finalDate={finalDate} setFinalDate={setFinalDate} />
            </CardContent>
            <CardContent sx={{ minHeight: '600px' }}>
                <AdminLogsDataGrid />
            </CardContent>
        </Card>
    )
};

export default AdminLogsCard;