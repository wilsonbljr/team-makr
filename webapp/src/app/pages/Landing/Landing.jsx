import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from 'mui-image'
import { Button, Grid, Typography } from '@mui/material';

import mobile from '../../../assets/mobile.svg'
import desktop from '../../../assets/desktop.svg'
import Container from '../../components/Container'

const MobileImg = styled(Image)`
    width: 100%;
    max-width: 250px;
`

const DesktopImg = styled(Image)`
    width: 100%;
    max-width: 1200px;
    max-height: 800px;
    object-fit: contain;
`

const Landing = () => {
    return (
        <>
            <Container>
                <Grid container alignItems='stretch' justifyContent='space-between' sx={{p: 0}}>
                    <Grid item xs={12} sx={{ display: { xs: 'inline', md: 'none' } }} >
                        <MobileImg src={mobile} alt="Desenvolvedor" />
                    </Grid>
                    <Grid item md={8} sx={{ display: { xs: 'none', md: 'inline' } }} >
                            <DesktopImg src={desktop} alt="Time" />
                    </Grid>
                    <Grid item sm={12} md={4} sx={{height: '100%', background: '#FFF'}}>
                        <Grid container justifyContent='center' flexDirection='column' alignItems='center' sx={{ height: '100%' }}>
                            <Typography variant='h4' component='h1' sx={{ textAlign: 'center', mb: 2 }}>Find the perfect team</Typography>
                            <Typography variant='h6' component='h2' sx={{ textAlign: 'center', mb: 5 }}>Building your project is way easier with the right people</Typography>
                            <Button component={Link} to="/login" variant='contained' sx={{ width: '70%' }}>Get Started</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Landing;



