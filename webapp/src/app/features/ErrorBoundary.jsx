import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Image } from 'mui-image';

import internalImg from '../../assets/500.svg';
import { primaryColour } from '../../core/utils/Variables';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) { }

    render() {
        if (this.state.hasError) {
            return (
                <Grid container sx={{ p: 3 }}>
                    <Card sx={{ width: '100%', height: { md: '100%' }, background: primaryColour, minWidth: '320px', borderRadius: 4 }}>
                        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
                            <Grid container flexDirection='column' alignItems='center'>
                                <Image src={internalImg} sx={{ maxWidth: '800px' }} />
                                <Typography variant='h4' component='h1' sx={{ mt: 4, fontWeight: 500, textAlign: 'center' }}>Something went wrong</Typography>
                                <Typography variant='h6' component='h2' sx={{ mb: 2, mt: 1, fontWeight: 300, textAlign: 'center' }}>Please, try again</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;