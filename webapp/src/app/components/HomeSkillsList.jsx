import React from 'react'
import { Box } from '@mui/system';
import { Grid, ListItem, ListItemText, Rating, Tooltip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import { skillLabel, skillTooltip } from '../../core/utils/Lists';
import { iconColor } from '../../core/utils/Variables';

const HomeSkillsList = (props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ListItem sx={{ maxWidth: '700px' }}>
                <Grid container justifyContent='center' alignItems='center'>
                    <Grid item xs={6}>
                        <ListItemText primary={<Typography variant='h6'>{props.name}</Typography>} sx={{ textAlign: 'center', minWidth: '150px', flexGrow: '1' }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Tooltip disableFocusListener placement='top' title={<Typography variant='body2'>{skillTooltip[props.level]}</Typography>}>
                            <Grid container flexDirection='column' sx={{ flexGrow: '1' }} alignItems='center'>
                                <Rating
                                    name='skill-level'
                                    value={props.level}
                                    readOnly
                                    emptyIcon={<StarIcon style={{ opacity: 0.25, color: iconColor }} fontSize="inherit" />}
                                />
                                <Typography sx={{ fontWeight: 500, mt: 1 }} variant='body1'>{skillLabel[props.level]}</Typography>
                            </Grid>
                        </Tooltip>
                    </Grid>
                </Grid>
            </ListItem>
        </Box>
    )
};

export default HomeSkillsList;