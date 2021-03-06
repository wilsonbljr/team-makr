import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';
import useValidate from '../../core/hooks/useValidate';

import { Alert, Button } from '@mui/material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import { deleteSkill } from '../../core/services/skill.service';

const AdminDeleteSkillForm = (props) => {
    const { token } = useAuth();
    const { setCurrentAllSkills } = useSkills();
    const { errors, handleValidation } = useValidate();
    const [skillId, setSkillId] = useState('');
    const [alert, setAlert] = useState(false);


    const deleteForm = event => {
        event.preventDefault();
        if (!errors.skillId.error) {
            deleteSkill(skillId, token).then(async status => {
                if (status === 200) {
                    props.closeModal();
                    props.openSnack();
                    setCurrentAllSkills(token);
                } else {
                    setAlert(true);
                }
            }).catch(err => {
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 3000);
            });
        }
    };

    return (
        <StyledForm onSubmit={event => { deleteForm(event) }}>
            <StyledInput
                onChange={(event) => { setSkillId(event.target.value) }}
                error={skillId === '' ? false : errors.skillId.error}
                helperText={skillId === '' ? false : errors.skillId.errorText}
                id='id'
                label='Skill Id'
                value={skillId}
                variant='outlined'
                type="number"
                required
                onKeyPress={e => { if (e.key === 'Enter') { handleValidation({ skillId }) } }}
                onBlur={() => { handleValidation({ skillId }) }}
            />
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type="submit" variant="outlined" color='error' >Delete Skill</Button>
        </StyledForm>
    )
}

export default AdminDeleteSkillForm;