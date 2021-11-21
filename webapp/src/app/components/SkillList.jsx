import React from 'react'
import { Grid, ListItem, ListItemText, Rating, Tooltip, Typography } from '@mui/material';
import { skillLabel, skillTooltip } from '../../core/utils/Lists';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

const SkillList = (props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ListItem sx={{ maxWidth: '700px' }}>
                <Grid container justifyContent='center'>
                    <Grid xs={6}>
                        <ListItemText primary={<Typography variant='h6'>{props.name}</Typography>} sx={{ textAlign: 'center', minWidth: '150px', flexGrow: '1' }} />
                    </Grid>
                    <Grid xs={6}>
                        <Tooltip disableFocusListener placement='top' title={<Typography variant='body2'>{skillTooltip[props.level]}</Typography>}>
                            <Grid container flexDirection='column' sx={{ flexGrow: '1' }} alignItems='center'>
                                <Rating
                                    name='skill-level'
                                    value={props.level}
                                    readOnly
                                    emptyIcon={<StarIcon style={{ opacity: 0.25, color: 'white' }} fontSize="inherit" />}
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

export default SkillList;