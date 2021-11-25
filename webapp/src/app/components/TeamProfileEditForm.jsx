import React, { useState } from 'react'
import { useAuth } from '../../auth/AuthContext';

import { Alert, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput'
import { editTeam, getTeam } from '../../core/services/team.service';

const TeamProfileEditForm = (props) => {
    const { token } = useAuth();
    const [name, setName] = useState(props.team.name);
    const [description, setDescription] = useState(props.team.description);
    const [alert, setAlert] = useState(false);


    const editForm = event => {
        event.preventDefault();
        editTeam(props.team.id, { name, description }, token).then(async res => {
            if (res === 200) {
                await getTeam(props.team.id, props.setTeam, token);
                props.closeModal();
                props.openSnack();
            } else {
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 3000);
            }
        }).catch(err => {
            console.log(err)
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        });
    };

    return (
        <StyledForm onSubmit={event => { editForm(event) }}>
            <StyledInput onChange={(event) => {
                setName(event.target.value);
            }} id='name' label='Name' value={name} variant='outlined' type="text" required />
            <StyledInput onChange={(event) => {
                setDescription(event.target.value);
            }} id='pronoun' label='Pronouns' variant='outlined' value={description} type="text" required />
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type="submit" variant="outlined" endIcon={<Edit />}>Edit Team</Button>
        </StyledForm>
    )
}

export default TeamProfileEditForm;