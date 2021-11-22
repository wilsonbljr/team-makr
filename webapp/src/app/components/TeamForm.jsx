import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '@mui/material';
import { createTeam } from '../../core/services/team.service';
import { useAuth } from '../../auth/AuthContext';
import { useTeams } from '../../core/hooks/useTeams'
import GeneralInput from './GeneralInput'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

const TeamForm = (props) => {
    const [teamName, setTeamName] = useState('');
    const [teamDesc, setTeamDesc] = useState('');
    const { user, token } = useAuth();
    const { setCurrentUserTeams } = useTeams();

    const teamForm = event => {
        event.preventDefault();
        createTeam(teamName, teamDesc, user, token).then((status) => {
            console.log(status)
            if (status === 201) {
                props.closeModal();
                props.openSnack();
                setCurrentUserTeams(user, token);
            }
        })
    }

    return (
        <StyledForm onSubmit={event => { teamForm(event) }}>
            <GeneralInput onChange={(event) => {
                setTeamName(event.target.value);
            }} id='name' label='Team name' variant='outlined' type="text" required />
            <GeneralInput onChange={(event) => {
                setTeamDesc(event.target.value);
            }} id='description' multiline label='Description' variant='outlined' type="text" required />
            <Button type="submit" variant='outlined'>Create</Button>
        </StyledForm>
    )
}

export default TeamForm;