import React from 'react';
import { Outlet } from 'react-router';
import { Card, Grid } from '@mui/material';
import { primaryColour } from '../../../core/utils/Variables';


const ErrorLayout = ({ children }) => {

    return (
        <Grid container  sx={{ p: 3 }}>
            <Card sx={{ width: '100%', height: { md: '100%' }, background: primaryColour, minWidth: '320px', borderRadius: 4 }}>
                <Outlet />
            </Card>
        </Grid>
    )
}

export default ErrorLayout;