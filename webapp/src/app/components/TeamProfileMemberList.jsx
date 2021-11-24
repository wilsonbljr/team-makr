import React from 'react'
import { useNavigate } from 'react-router';
import { Box } from '@mui/system';
import { Grid, IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import { Groups, OpenInNew, Person } from '@mui/icons-material';

import { teamRoles } from '../../core/utils/Lists'
import { iconColor } from '../../core/utils/Variables';

const RoleIcon = {
    0: <Groups />,
    1: <Person />
}

const TeamProfileMemberList = (props) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 1, borderColor: 'primary.main', borderRadius: 2 }}>
            <ListItem secondaryAction={
                <IconButton onClick={() => navigate('/user/' + props.user.id)}>
                    <OpenInNew sx={{ color: iconColor }} />
                </IconButton>}>
                <Grid container justifyContent='center'>
                    <Grid xs={12} sm={6}>
                        <ListItemText
                            primary={<Typography variant='h6'>{props.user.firstName}</Typography>}
                            secondary={<Typography variant='body2' sx={{ fontWeight: 300 }}>{props.user.lastName}</Typography>}
                            sx={{ minWidth: '150px', flexGrow: '1' }} />
                    </Grid>
                    <Grid sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Grid container flexDirection='column' sx={{ flexGrow: '1' }} alignItems='center'>
                            {RoleIcon[props.user.leader]}
                            <Typography sx={{ fontWeight: 500, mt: 1 }} variant='body1'>{teamRoles[props.user.leader]}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        </Box>
    )
};

export default TeamProfileMemberList;