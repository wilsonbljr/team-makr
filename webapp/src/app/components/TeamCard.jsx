import React from 'react'
import styled from 'styled-components';
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { lightPrimaryColour, primaryColour } from '../../core/utils/Variables';
import { useNavigate } from 'react-router';


const CategoryText = styled(Typography)`
    font-weight: 700;
    text-align: right;
`

const Text = styled(Typography)`
    font-weight: 400;
    text-align: left;
    word-wrap: break-word;
`

const TeamCard = (props) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ width: "400px" }} key={props.id}>
            <CardHeader
                sx={{ background: lightPrimaryColour, pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h6'
                    sx={{ color: 'black', fontSize: '1.2em', textAlign: 'center' }}>
                    {props.name}
                </Typography>}
                action={<IconButton onClick={() => navigate('/team/' + props.id)}>
                    <OpenInNew />
                </IconButton>}
                avatar={<Avatar sx={{ bgcolor: primaryColour, color: 'white' }}>{props.name.charAt(0)}</Avatar>}
            />
            <CardContent sx={{ paddingTop: '0px' }}>
                <Grid container alignItems='stretch'>
                    <Grid item xs={5} sx={{ textAlign: 'right', pr: 1 }} >
                        <CategoryText sx={{ mt: 1, mb: 2, color: 'black' }}>Description: </CategoryText>
                    </Grid>
                    <Grid item xs={7} >
                        <Text sx={{ mt: 1, mb: 2, color: 'black' }} >{props.description}</Text>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default TeamCard;