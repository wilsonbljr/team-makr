import React from 'react'
import { Grid, IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import { Groups, OpenInNew, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { Box } from '@mui/system';
import { teamRoles } from '../../core/utils/Lists'

const RoleIcon = {
    0: <Groups />,
    1: <Person />
}

const TeamList = (props) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2 }}>
            <ListItem
                secondaryAction={
                    <IconButton onClick={() => navigate('/team/' + props.id)}>
                        <OpenInNew sx={{ color: 'white' }} />
                    </IconButton>}>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} sm={6}>
                        <ListItemText
                            primary={<Typography variant='h6'>{props.name}</Typography>}
                            secondary={<Typography variant='body2' sx={{ fontWeight: 300 }}>{props.description.length > 15 ? props.description.substring(0, 15) + '...' : props.description}</Typography>}
                            sx={{ minWidth: '150px', flexGrow: '1', wordWrap: 'break-word', pr: 1 }} />
                    </Grid>
                    <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Grid container flexDirection='column' sx={{ flexGrow: '1' }} alignItems='center'>
                            {RoleIcon[props.leader]}
                            <Typography sx={{ fontWeight: 500, mt: 1 }} variant='body1'>{teamRoles[props.leader]}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        </Box>
    )
};

export default TeamList;