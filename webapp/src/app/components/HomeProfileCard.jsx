import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'
import { lightPrimaryColour } from '../../core/utils/Variables'
import styled from 'styled-components';
import { Edit } from '@mui/icons-material';

const Text = styled(Typography)`
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.3px;
    word-wrap: break-word;
`

const CategoryText = styled(Typography)`
    font-weight: 700;
    text-align: right;
    letter-spacing: 0.3px;
`

const HomeProfileCard = (props) => {
    return (
        <Card sx={{ width: '310px' }}>
            <CardHeader sx={{ background: lightPrimaryColour, padding: '8px' }}></CardHeader>
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px', color: 'black' }}>
                <Grid container>
                    <Grid item xs={4} sx={{ textAlign: 'right', pr: 1 }}>
                        <CategoryText sx={{ mt: 2, mb: 2 }}>Pronouns: </CategoryText>
                        <CategoryText sx={{ mt: 2, mb: 2 }}>Email: </CategoryText>
                        <CategoryText sx={{ mt: 2, mb: 2 }}>Phone: </CategoryText>
                    </Grid>
                    <Grid item xs={8}>
                        <Text sx={{ mt: 2, mb: 2 }}>{props.pronoun}</Text>
                        <Text sx={{ mt: 2, mb: 2 }}>{props.email}</Text>
                        <Text sx={{ mt: 2, mb: 2 }}>{props.phone_number}</Text>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button endIcon={<Edit />} variant='outlined' sx={{ width: '100%' }}
                    component={Link} to='/editprofile'>Edit Profile</Button>
            </CardActions>
        </Card>
    )
}

export default HomeProfileCard;