import React from 'react';
import { useNavigate } from 'react-router';
import { useSkills } from '../../core/hooks/useSkills';
import { Chip, Divider, IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { Box } from '@mui/system';

import { skillLabel } from '../../core/utils/Lists';
import { iconColor } from '../../core/utils/Variables';

const SearchResultsList = (props) => {
    const navigate = useNavigate();
    const { allSkills } = useSkills();
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ListItem
                    onClick={() => navigate('/u/' + props.person.id)}
                    secondaryAction={
                        <IconButton onClick={() => navigate('/u/' + props.person.id)} sx={{ display: { xs: 'none', md: 'inline' } }}>
                            <OpenInNew sx={{ color: iconColor }} />
                        </IconButton>}>
                    <ListItemText
                        primary={<Typography variant='h6' component='h1'>{props.person.firstName + ' ' + props.person.lastName}</Typography>}
                        secondary={
                            props.skillFilter && props.person.skills && props.skillFilter.length !== 0 ?
                                <Chip
                                    label={
                                        <>
                                            <Typography component='span' sx={{ fontWeight: 500, display: 'inline' }}>
                                                {allSkills.find(s => s.id === props.skillFilter).name}
                                            </Typography>
                                            <Typography component='span' sx={{ fontWeight: 300, display: { xs: 'none', sm: 'inline' }, ml: 0.7 }}>
                                                | {props.person.skills.find(s => s.skillId === props.skillFilter) ? skillLabel[props.person.skills.find(s => s.skillId === props.skillFilter).level] : 'error'}
                                            </Typography>
                                        </>
                                    }
                                    sx={{ m: 0.25, p: 0.25, fontWeight: 500, fontSize: '0.95em' }}
                                    color='primary'
                                    variant='outlined'
                                />
                                : props.person.skills ? props.person.skills.slice(0, 5).map(skill => (
                                    <Chip
                                        key={skill.skillId}
                                        label={
                                            <>
                                                <Typography component='span' sx={{ fontWeight: 500, display: 'inline' }}>
                                                    {allSkills.find(s => s.id === skill.skillId).name}
                                                </Typography>
                                                <Typography component='span' sx={{ fontWeight: 300, display: { xs: 'none', sm: 'inline' }, ml: 0.7 }}>
                                                    | {skillLabel[skill.level]}
                                                </Typography>
                                            </>
                                        }
                                        sx={{ m: 0.25, p: 0.25, fontWeight: 500, fontSize: '0.95em' }}
                                        color='primary'
                                        variant='outlined'
                                    />
                                ))
                                    : <Typography variant='body2' component='h2' sx={{ fontWeight: 300, display: 'inline', mr: 2, color: 'white' }}>No skills</Typography>}
                        sx={{ minWidth: '150px', flexGrow: '1', wordWrap: 'break-word', pr: 1 }}
                    />
                </ListItem>
            </Box>
            <Divider />
        </>
    )
};

export default SearchResultsList;