import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContent, Grid, Typography } from '@mui/material';
import { Image } from 'mui-image';

import unauthImg from '../../assets/401.svg';

const ErrorUnauthorizedCard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/login'), 5000)
    })

    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center'>
                <Image src={unauthImg} sx={{ maxWidth: '800px' }} />
                <Typography variant='h4' component='h1' sx={{ mt: 4, fontWeight: 500, textAlign: 'center' }}>Unauthorized</Typography>
                <Typography variant='h6' component='h2' sx={{ mb: 2, mt: 1, fontWeight: 300, textAlign: 'center' }}>You either don't have access to this page or your login expired</Typography>
            </Grid>
        </CardContent>
    )
}

export default ErrorUnauthorizedCard;