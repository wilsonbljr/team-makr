import React from 'react'
import styled from 'styled-components';
import { Avatar, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { lightPrimaryColour, primaryColour } from '../../core/utils/Variables';


const CategoryText = styled(Typography)`
    font-weight: 700;
    text-align: right;
    letter-spacing: 0.3px;
`

const Text = styled(Typography)`
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.3px;
    word-wrap: break-word;
`

const TeamCard = (props) => {
    return (
        <Card sx={{ width: "400px" }} key={props.id}>
            <CardHeader
                sx={{ background: primaryColour, pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h6'
                    sx={{ color: 'white', fontSize: '1.2em', textAlign: 'center' }}>
                    {props.name}
                </Typography>}
                action={<IconButton onClick={() => props.navigate('/team/' + props.id)}>
                    <OpenInNew sx={{ filter: 'invert(100)' }} />
                </IconButton>}
                avatar={<Avatar sx={{ bgcolor: lightPrimaryColour }}>{props.name.charAt(0)}</Avatar>}
            />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <Grid container alignItems='stretch'>
                    <Grid item xs={4} sx={{ textAlign: 'right', pr: 1 }} >
                        <CategoryText sx={{ mt: 1, mb: 2 }}>Description: </CategoryText>
                    </Grid>
                    <Grid item xs={8} >
                        <Text sx={{ mt: 1, mb: 2 }} >{props.description}</Text>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
};

export default TeamCard;