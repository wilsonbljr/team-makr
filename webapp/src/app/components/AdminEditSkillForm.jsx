import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';

import { Alert, Button, Checkbox, FormControlLabel } from '@mui/material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';
import { editSkill } from '../../core/services/skill.service';
import { iconColor } from '../../core/utils/Variables';

const AdminEditSkillForm = (props) => {
    const { token } = useAuth();
    const { setCurrentAllSkills } = useSkills();
    const [skillId, setSkillId] = useState('');
    const [skillName, setSkillName] = useState('');
    const [softSkill, setSoftSkill] = useState(false);
    const [alert, setAlert] = useState(false);


    const editForm = event => {
        event.preventDefault();
        editSkill(skillId, { name: skillName, soft_skill: softSkill }, token).then(async status => {
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
            <StyledInput
                id='skillName'
                label='Skill Name'
                value={skillName}
                variant='outlined'
                type="text"
                onChange={(event) => { setSkillName(event.target.value) }}
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

export default AdminEditSkillForm;