import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Image } from 'mui-image';

import logoutImg from '../../../assets/logout.svg'
import { primaryColour } from '../../../core/utils/Variables';


const SuccessfulLogout = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 5000)
    })

    return (
        <Grid container sx={{ p: 3 }}>
            <Card sx={{ width: '100%', height: { md: '100%' }, background: primaryColour, minWidth: '320px', borderRadius: 4 }}>
                <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
                    <Grid container flexDirection='column' alignItems='center'>
                        <Image src={logoutImg} sx={{ maxWidth: '800px' }} />
                        <Typography variant='h4' component='h1' sx={{ mt: 4, fontWeight: 500, textAlign: 'center' }}>Logout successful</Typography>
                        <Typography variant='h6' component='h2' sx={{ mb: 2, mt: 1, fontWeight: 300, textAlign: 'center' }}>We hope to see you again</Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default SuccessfulLogout;