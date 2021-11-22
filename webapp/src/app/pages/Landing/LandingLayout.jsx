import React from 'react';
import { Outlet } from 'react-router';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Image from 'mui-image'

import desktop from '../../../assets/desktop.svg'
import { primaryColour } from '../../../core/utils/Variables';

const LandingLayout = ({ children }) => {
    return (
        <Grid container spacing={2} sx={{ p: 2.5 }}>
            <Grid item xs={12} md={8} lg={9} sx={{ display: { xs: 'none', md: 'inline' } }}>

                <Card sx={{ width: '100%', height: '100%', maxHeight: '96vh', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
                    <CardContent sx={{ p: 2, pt: 4 }}>
                        <Grid container flexDirection='row' alignItems='center'>
                            <Grid item md={7}>
                                <Image src={desktop} alt="Time" sx={{ maxWidth: '1300px' }} />
                            </Grid>
                            <Grid item md={5}>
                                <Typography variant='h4' component='h1' sx={{ textAlign: 'center', fontWeight: 500 }}>Start your project here</Typography>
                                <Typography variant='h6' component='h2' sx={{ textAlign: 'center', fontWeight: 300 }}>By finding the right people for the job</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <Card sx={{ width: '100%', height: { md: '100%' }, background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
                    <Outlet />
                </Card>
            </Grid>
        </Grid>
    )
}

export default LandingLayout;



