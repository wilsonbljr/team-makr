import React from 'react';
import { CardContent, Grid, Typography } from '@mui/material';
import internalImg from '../../assets/500.svg';
import { Image } from 'mui-image';


const ErrorInternalServerCard = () => {

    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center'>
                <Image src={internalImg} sx={{maxWidth: '800px'}} />
                <Typography variant='h4' component='h1' sx={{ mt: 4, fontWeight: 500, textAlign: 'center' }}>Internal Server Error</Typography>
                <Typography variant='h6' component='h2' sx={{ mb: 2, mt: 1, fontWeight: 300, textAlign: 'center' }}>Please, try again</Typography>
            </Grid>
        </CardContent>
    )
}

export default ErrorInternalServerCard;