import React from 'react'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import TeamProfileMemberList from '../components/TeamProfileMemberList'

import { primaryColour } from '../../core/utils/Variables'

const TeamProfileMemberCard = (props) => {
    return (
        <Card sx={{ width: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5, pr: 3 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Members
                </Typography>}
            />
            <CardContent>
                <Grid container spacing={1} justifyContent='center' alignItems='center' flexWrap='wrap'>
                    {props.team.users.map(user => (
                        <Grid item xs={12} lg={6} key={user.id}>
                            <TeamProfileMemberList user={user} />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TeamProfileMemberCard;