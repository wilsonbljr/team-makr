import React from 'react';
import { CardContent, Grid, Typography } from '@mui/material';
import { Image } from 'mui-image';

import notFoundImg from '../../assets/404.svg';

const ErrorNotFoundCard = () => {
    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center'>
                <Image src={notFoundImg} sx={{ maxWidth: '800px' }} />
                <Typography variant='h4' component='h1' sx={{ mt: 4, fontWeight: 500, textAlign: 'center' }}>Page not found</Typography>
                <Typography variant='h6' component='h2' sx={{ mb: 2, mt: 1, fontWeight: 300, textAlign: 'center' }}>This page doesn't exist</Typography>
            </Grid>
        </CardContent>
    )
}

export default ErrorNotFoundCard;