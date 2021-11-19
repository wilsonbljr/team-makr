import React from 'react'
import { Card, CardContent, CardHeader, Grid, Rating, Tooltip, Typography } from '@mui/material';
import { lightPrimaryColour, primaryColour } from '../../core/utils/Variables';
import { skillLabel, skillTooltip } from '../../core/utils/Lists';

const HomeSkillCard = (props) => {
    return (
        <Card sx={{ width: "280px" }} key={props.id}>
            <CardHeader
                sx={{ background: lightPrimaryColour, padding: '10px' }}
                title={<Typography
                    variant='h6'
                    sx={{ fontWeight: 700, fontSize: '1.2em', textAlign: 'center', color: 'black' }}>
                    {props.name}
                </Typography>}
            />
            <Tooltip disableFocusListener placement='top' title={<Typography sx={{ textAlign: 'justify' }} variant='body2'>{skillTooltip[props.level]}</Typography>}>
                <CardContent sx={{ paddingTop: '0px' }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Rating sx={{ mt: 1, mb: 1, pt: 1 }} name='skill-level' value={props.level} readOnly />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ mt: 1, mb: 1, fontWeight: 500, pb: 1, pt: 1, color: 'black' }} variant='body1'>{skillLabel[props.level]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Tooltip>
        </Card>
    )
};

export default HomeSkillCard;