import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { getTeam } from '../../../core/services/team.service';
import { useParams } from 'react-router';
import { primaryColour } from '../../../core/utils/Variables';
import { teamRoles } from '../../../core/utils/Lists';
import { useAuth } from '../../../auth/AuthContext';

const Title = styled(Typography)`
    text-align: left;
    font-weight: 900;
    font-size: 1.75em;
`

const Teams = () => {
    const [team, setTeam] = useState({ id: null, name: '', description: '', users: []})
    const { token } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        getTeam(id, setTeam, token);
    }, [])

    return (
        <Grid sx={{ p: 2 }}>
            <Grid container flexDirection='column' alignItems='left' >
                <Title>{team.name}</Title>
                <p>{team.description}</p>
            </Grid>
            <Grid>
                <Typography sx={{ fontSize: '1.3em', fontWeight: 900 }}>Members</Typography>
                {team.users.map((user, index) => {
                    return (
                        <Card sx={{ width: "280px" }} key={index}>
                            <CardHeader
                                sx={{ background: primaryColour, p: 1 }}
                                title={<Typography sx={{ textAlign: 'center', color: 'white' }} variant='body2'>{teamRoles[user.leader]}</Typography>}
                            />
                            <CardContent sx={{ paddingTop: '0px' }}>
                                <Grid container alignItems='stretch'>
                                    <Grid item xs={12} sx={{ textAlign: 'right', p: 1 }} >
                                        <Typography
                                            variant='h6'
                                            sx={{ fontSize: '1.2em', textAlign: 'center' }}>
                                            {user.firstName + ' ' + user.lastName}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default Teams