import React, { useState } from 'react';
import { addUserToTeam } from '../../core/services/team.service';
import { useAuth } from '../../auth/AuthContext';
import { useTeams } from '../../core/hooks/useTeams';
import { makeStyles } from '@mui/styles';
import { Alert, Button, MenuItem } from '@mui/material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';

import { darkerPrimaryColour } from '../../core/utils/Variables';

const useStyles = makeStyles(theme => ({
    icon: {
        fill: 'white',
    },
    dropdownStyle: {
        backgroundColor: darkerPrimaryColour,
    }
}));

const UserAddToTeamForm = (props) => {
    const classes = useStyles();
    const [teamId, setTeamId] = useState('');
    const [alert, setAlert] = useState(false);
    const { token } = useAuth();
    const { teams } = useTeams();

    const addUserToTeamForm = event => {
        event.preventDefault();
        addUserToTeam(props.userId, teamId, token).then((status) => {
            if (status === 201 ) {
                props.closeModal();
                props.openSnack();
            };

            if (status === 'Request failed with status code 400') {
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 3000)
            };
        })
    }

    return (
        <StyledForm onSubmit={event => { addUserToTeamForm(event) }}>
            <StyledInput
                labelid='teamSelectLabel'
                id='teamSelect'
                value={teamId}
                label='Select Team'
                onChange={event => {
                    setTeamId(event.target.value);
                }}
                SelectProps={{
                    inputProps: {
                        classes: {
                            icon: classes.icon
                        }
                    },
                    MenuProps: {
                        classes: {
                            paper: classes.dropdownStyle
                        }
                    }
                }}
                required
                select
            >
                <MenuItem value={''}>None</MenuItem>
                {teams.map(team => (
                    <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                ))}
            </StyledInput>
            {alert ? <Alert severity='error'>User already in team</Alert> : <> </>}
            <Button type="submit" variant='outlined'>ADD</Button>
        </StyledForm>
    )
}

export default UserAddToTeamForm;