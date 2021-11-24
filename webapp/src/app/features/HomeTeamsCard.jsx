import React from 'react'
import { useTeams } from '../../core/hooks/useTeams';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

import HomeTeamsList from '../components/HomeTeamsList';

import { primaryColour } from '../../core/utils/Variables';

const HomeTeamsCard = (props) => {
    const { teams } = useTeams();

    return (
        <Card sx={{ width: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5, pr: 3 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Teams
                </Typography>}
                action={props.openModal ? <Button endIcon={<AddBoxIcon />} variant='contained' onClick={() => props.openModal(true)}>CREATE TEAM</Button> : null}
            />
            <CardContent>
                <Grid container spacing={1} justifyContent='center' alignItems='center' flexWrap='wrap'>
                    {teams.length !== 0 ? teams.map((team) => (
                        <Grid item xs={12} lg={6} key={team.id}>
                            <HomeTeamsList name={team.name} id={team.id} description={team.description} leader={team.leader} />
                        </Grid>
                    ))
                        : <Typography variant='body1'>You haven't joined any teams yet</Typography>}
                </Grid>
            </CardContent>
        </Card>
    )
};

export default HomeTeamsCard;