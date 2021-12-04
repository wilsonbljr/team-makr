import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';

import { Alert, Button, Checkbox, FormControlLabel } from '@mui/material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import { addSkill } from '../../core/services/skill.service';
import { iconColor } from '../../core/utils/Variables';

const AdminAddSkillForm = (props) => {
    const { token } = useAuth();
    const { setCurrentAllSkills } = useSkills();
    const [skillName, setSkillName] = useState('');
    const [softSkill, setSoftSkill] = useState(false);
    const [alert, setAlert] = useState(false);


    const addSkillForm = event => {
        event.preventDefault();
        addSkill({ name: skillName, soft_skill: softSkill }, token).then(async status => {
            if (status === 201) {
                props.closeModal();
                props.openSnack();
                setCurrentAllSkills(token);
            }
        }).catch(err => {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        });
    };

    return (
        <StyledForm onSubmit={event => { addSkillForm(event) }}>
            <StyledInput
                id='skillName'
                label='Skill Name'
                value={skillName}
                variant='outlined'
                type="text"
                onChange={(event) => { setSkillName(event.target.value) }}
                required
            />
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <FormControlLabel
                control={<Checkbox
                    checked={softSkill}
                    onChange={(event) => { setSoftSkill(event.target.checked) }}
                    inputProps={{ 'aria-label': 'controlled' }}
                    style={{ color: iconColor }}
                />}
                label='Soft Skill'
                sx={{ ml: 1 }}
            />
            <Button type="submit" variant="outlined" >Add Skill</Button>
        </StyledForm>
    )
}

export default AdminAddSkillForm;