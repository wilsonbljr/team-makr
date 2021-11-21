import React from 'react'
import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { primaryColour } from '../../core/utils/Variables';
import { useTeams } from '../../core/hooks/useTeams';
import TeamList from '../components/TeamList';

const HomeTeamCard = () => {
    const { teams } = useTeams();

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Teams
                </Typography>}
            />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <Grid container spacing={1} justifyContent='center' alignItems='center' flexWrap='wrap'>
                    {teams.length !== 0 ? teams.map((team) => (
                        <Grid item xs={12} lg={6}>
                            {console.log(team)}
                            <TeamList name={team.name} id={team.id} description={team.description} leader={team.leader}/>
                        </Grid>
                    ))
                        : <Typography variant='body1'>You haven't joined any teams yet</Typography>}
                </Grid>
            </CardContent>
        </Card>
    )
};

export default HomeTeamCard;