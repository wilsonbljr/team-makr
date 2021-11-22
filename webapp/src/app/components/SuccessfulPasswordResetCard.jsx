import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CardContent, Grid, Typography } from '@mui/material';
import successImg from '../../assets/password.svg'
import { Image } from 'mui-image';


const SuccessfulPasswordResetCard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/login'), 5000)
    })

    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center'>
                <Image src={successImg} />
                <Typography variant='h4' component='h1' sx={{ mb: 2, mt: 4, fontWeight: 500, textAlign: 'center' }}>Password changed</Typography>
                <Typography variant='h6' component='h2'>Redirecting to login</Typography>
            </Grid>
        </CardContent>
    )
}

export default SuccessfulPasswordResetCard;