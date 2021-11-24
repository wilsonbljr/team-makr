import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';

import { Alert, Button } from '@mui/material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import { deleteSkill } from '../../core/services/skill.service';

const AdminDeleteSkillForm = (props) => {
    const { token } = useAuth();
    const { setCurrentAllSkills } = useSkills();
    const [skillId, setSkillId] = useState('');
    const [alert, setAlert] = useState(false);


    const editForm = event => {
        event.preventDefault();
        deleteSkill(skillId, token).then(async status => {
            if (status === 200) {
                props.closeModal();
                props.openSnack();
                setCurrentAllSkills(token);
            } else {
                setAlert(true);
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
            <StyledInput
                id='id'
                label='Skill Id'
                value={skillId}
                variant='outlined'
                type="number"
                onChange={(event) => { setSkillId(event.target.value) }}
                required
            />
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type="submit" variant="outlined" color='error' >Delete Skill</Button>
        </StyledForm>
    )
}

export default AdminDeleteSkillForm;