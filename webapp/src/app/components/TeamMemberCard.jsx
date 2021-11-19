import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import { teamRoles } from '../../core/utils/Lists'
import { lightPrimaryColour } from '../../core/utils/Variables'

const TeamMemberCard = (props) => {
    return (
        <Card sx={{ width: "280px" }} key={props.id}>
            <CardHeader
                sx={{ background: lightPrimaryColour, p: 1 }}
                title={<Typography sx={{ color: 'black', fontSize: '1.2em', textAlign: 'center' }} variant='h6' component='h1'>{teamRoles[props.leader]}</Typography>}
            />
            <CardContent sx={{ paddingTop: '0px' }}>
                <Grid container alignItems='stretch'>
                    <Grid item xs={12} sx={{ textAlign: 'right', p: 1 }} >
                        <Typography
                            variant='h6'
                            sx={{ fontSize: '1.2em', textAlign: 'center', color: 'black' }}>
                            {props.firstName + ' ' + props.lastName}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TeamMemberCard;