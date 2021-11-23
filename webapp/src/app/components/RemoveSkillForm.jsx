import React, { useState } from 'react'
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';
import { removeUserToSkill } from '../../core/services/skill.service';
import { Alert, Button, MenuItem, Snackbar } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { StyledForm } from './StyledForm';
import { makeStyles } from '@mui/styles';
import { darkerPrimaryColour } from '../../core/utils/Variables';
import GeneralInput from './GeneralInput';

const useStyles = makeStyles(theme => ({
    icon: {
        fill: 'white',
    },
    dropdownStyle: {
        backgroundColor: darkerPrimaryColour,
    }
}));


const RemoveSkillForm = () => {
    const { user, token } = useAuth();
    const { skills, setCurrentUserSkills } = useSkills();
    const [skillRemove, setSkillRemove] = useState('');
    const classes = useStyles();

    const [alert, setAlert] = useState(false);
    const [snack, setSnack] = useState(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);

    async function removeSkillFromPerson(event) {
        event.preventDefault();
        await removeUserToSkill(user, skillRemove, token)
            .then(res => {
                if (res < 202) {
                    openSnack();
                    setCurrentUserSkills(user, token);
                } else {
                    setAlert(true);
                    setTimeout(() => {
                        setAlert(false);
                    }, 3000);
                }
            })
            .catch(err => err.message);
    }

    return (
        <StyledForm onSubmit={event => { removeSkillFromPerson(event) }}>
            <GeneralInput
                labelId='skillSelectLabel'
                id='skillSelect'
                value={skillRemove}
                label='Select Skill'
                onChange={(event) => setSkillRemove(event.target.value)}
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
                {skills.map(skill => (
                    <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
                ))}
            </GeneralInput>
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type='submit' variant='contained' color='error' startIcon={<Delete />}>Remove Skill</Button>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Skill removed!
                </Alert>
            </Snackbar>
        </StyledForm>
    )
}

export default RemoveSkillForm;