import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import { createTeam, getUserTeams } from '../../core/services/team.service';
import { useAuth } from '../../auth/AuthContext';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

const TeamForm = (props) => {
    const [teamName, setTeamName] = useState('');
    const [teamDesc, setTeamDesc] = useState('');
    const { user, token } = useAuth();

    const teamForm = event => {
        event.preventDefault();
        createTeam(teamName, teamDesc, user, token).then((status) => {
            console.log(status)
            if (status === 201) {
                props.closeModal();
                props.openSnack();
                getUserTeams(user, props.setTeams, token);
            }
        })
    }

    return (
        <StyledForm onSubmit={event => { teamForm(event) }}>
            <TextField onChange={(event) => {
                setTeamName(event.target.value);
            }} id='name' label='Team name' variant='outlined' type="text" required />
            <TextField onChange={(event) => {
                setTeamDesc(event.target.value);
            }} id='description' multiline label='Description' variant='outlined' type="text" required />
            <Button type="submit">Create</Button>
        </StyledForm>
    )
}

export default TeamForm;