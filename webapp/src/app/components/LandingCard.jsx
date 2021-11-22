import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Image } from 'mui-image'
import React from 'react'
import { primaryColour } from '../../core/utils/Variables'
import mobile from '../../assets/mobile.svg'
import { Link } from 'react-router-dom'


const LandingCard = () => {
    return (
            <CardContent sx={{ p: 2, pt: 4 }}>
                <Grid container flexDirection='column' alignItems='center'>
                    <Image src={mobile} alt="Desenvolvedor" sx={{ maxWidth: '500px' }} />
                    <Typography variant='h6' component='h2' sx={{ textAlign: 'center', mb: 4, mt: 3 }}>Building your project is way easier with the right people</Typography>
                    <Button component={Link} to="/login" variant='contained' sx={{ width: '80%', mb: 2 }}>Get Started</Button>
                </Grid>
            </CardContent>
    )
}

export default LandingCard;