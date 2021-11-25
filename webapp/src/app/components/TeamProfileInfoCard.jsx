import React from 'react';
import { useAuth } from '../../auth/AuthContext';
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { Edit, Logout } from '@mui/icons-material';

import { CardText, CardCategoryText } from './StyledCardText';
import { primaryColour, secondaryColour } from '../../core/utils/Variables';

const TeamProfileInfoCard = (props) => {
    const { user } = useAuth();

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    {props.team.name}
                </Typography>}
                avatar={<Avatar sx={{
                    bgcolor: secondaryColour,
                    color: 'black',
                    fontSize: '2em',
                    fontWeight: 500,
                    width: '75px',
                    height: '75px'
                }}>{props.team.name.charAt(0)}</Avatar>}
            />
            <Divider />
            <CardContent>
                <Grid container flexDirection='column'>
                    <CardCategoryText>Team Description: </CardCategoryText>
                    <CardText sx={{ maxWidth: '100%' }}>{props.team.description}</CardText>
                    <CardCategoryText>Members: </CardCategoryText>
                    <CardText>There are currently {props.team.users.length} member(s) in this team.</CardText>

                    {props.team.users.find(u => u.id === user) && props.team.users.find(u => u.id === user).leader === 1
                        ? <>
                            <CardCategoryText sx={{ pt: 3 }}>Edit team: </CardCategoryText>
                            <Button
                                color='info'
                                variant='contained'
                                sx={{ mt: 3 }}
                                endIcon={<Edit />}
                                onClick={() => props.setEditModal(true)}> Edit Team </Button>
                        </> : <> </>}
                    <CardCategoryText sx={{ pt: 3 }}>Leave team: </CardCategoryText>
                    <Button
                        color='error'
                        variant='contained'
                        sx={{ mt: 3 }}
                        endIcon={<Logout />}
                        onClick={() => props.setDeleteModal(true)}> Leave Team </Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TeamProfileInfoCard;