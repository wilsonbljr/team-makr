import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { getLogs } from '../../core/services/logs.service';
import { Alert, Card, CardContent, CardHeader, Typography } from '@mui/material';

import AdminLogsDataGrid from '../components/AdminLogsDataGrid';
import AdminFilterDateForm from '../components/AdminFilterDateForm';

import { primaryColour } from '../../core/utils/Variables';

const AdminLogsCard = (props) => {
    const { token } = useAuth();
    const [initialDate, setInitialDate] = useState(new Date().toISOString().slice(0, 10));
    const [finalDate, setFinalDate] = useState(new Date().toISOString().slice(0, 10));
    const [logs, setLogs] = useState([]);
    const [alert, setAlert] = useState(false);

    const getLogsForm = async (event) => {
        event.preventDefault();
        await getLogs(initialDate, finalDate, setLogs, token).then(async res => {
            if (res !== 200) {
                console.log(res)
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 3000);
            }
        }).catch(err => {
            console.log(err)
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        });

    }

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
                <AdminFilterDateForm initialDate={initialDate} setInitialDate={setInitialDate} finalDate={finalDate} setFinalDate={setFinalDate} getLogsForm={getLogsForm} />
            </CardContent>
            <CardContent sx={{ minHeight: '600px' }}>
                {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
                <AdminLogsDataGrid logs={logs} />
            </CardContent>
        </Card>
    )
};

export default AdminLogsCard;