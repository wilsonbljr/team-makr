import React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';

import { primaryColour, secondaryColour } from '../../core/utils/Variables';
import { CardText, CardCategoryText } from './StyledCardText';

const TeamInfoCard = (props) => {
    const openModal = () => props.setModal(true);

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    {props.name}
                </Typography>}
                avatar={<Avatar sx={{
                    bgcolor: secondaryColour,
                    color: 'black',
                    fontSize: '2em',
                    fontWeight: 500,
                    width: '75px',
                    height: '75px'
                }}>{props.name.charAt(0)}</Avatar>}
            />
            <Divider />
            <CardContent>
                <Grid container flexDirection='column'>
                    <CardCategoryText>Team Description: </CardCategoryText>
                    <CardText sx={{maxWidth: '100%'}}>{props.description}</CardText>
                    <CardCategoryText>Members: </CardCategoryText>
                    <CardText>There are currently {props.users.length} member(s) in this team.</CardText>
                    <CardCategoryText sx={{ pt: 3 }}>Leave team</CardCategoryText>
                    <Button
                        color='error'
                        variant='contained'
                        sx={{ mt: 3 }}
                        onClick={() => openModal()}> Leave Team </Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TeamInfoCard;