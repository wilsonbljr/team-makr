import React, { useState } from 'react';
import { Button, MenuItem } from '@mui/material';
import { addUserToTeam, createTeam } from '../../core/services/team.service';
import { useAuth } from '../../auth/AuthContext';
import { useTeams } from '../../core/hooks/useTeams';
import GeneralInput from './GeneralInput';
import { StyledForm } from './StyledForm';
import { makeStyles } from '@mui/styles';
import { darkerPrimaryColour } from '../../core/utils/Variables';

const useStyles = makeStyles(theme => ({
    icon: {
        fill: 'white',
    },
    dropdownStyle: {
        backgroundColor: darkerPrimaryColour,
    }
}));

const UsersAddToTeamForm = (props) => {
    const classes = useStyles();
    const [teamId, setTeamId] = useState('');
    const { token } = useAuth();
    const { teams } = useTeams();

    const addUserToTeamForm = event => {
        event.preventDefault();
        addUserToTeam(props.userId ,teamId, token).then((status) => {
            if (status === 201) {
                props.closeModal();
                props.openSnack();
            }
        })
    }

    return (
        <StyledForm onSubmit={event => { addUserToTeamForm(event) }}>
            <GeneralInput
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
                select
            >
                <MenuItem value={''}>None</MenuItem>
                {teams.map(team => (
                    <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                ))}
            </GeneralInput>
            <Button type="submit" variant='outlined'>ADD</Button>
        </StyledForm>
    )
}

export default UsersAddToTeamForm;