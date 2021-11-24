import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';
import { addUserToSkill } from '../../core/services/skill.service';

import { Alert, Button, Grid, Rating, Snackbar, Tooltip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Add } from '@mui/icons-material';

import SkillsAutoComplete from './SkillsAutoComplete';
import StyledForm from './StyledForm';

import { skillLabel, skillTooltip } from '../../core/utils/Lists';
import { iconColor } from '../../core/utils/Variables';

const SkillsAddForm = () => {
    const { user, token } = useAuth();
    const { setCurrentUserSkills } = useSkills();

    const [alert, setAlert] = useState(false);
    const [snack, setSnack] = useState(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);

    const [level, setLevel] = useState(2);
    const [hoverLevel, setHoverLevel] = useState(-1);
    const [skillAdd, setSkillAdd] = useState('');

    async function addSkillToPerson(event) {
        event.preventDefault();
        await addUserToSkill(user, skillAdd.id, level, token)
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
        <StyledForm onSubmit={event => { addSkillToPerson(event) }}>
            <SkillsAutoComplete setSkillAdd={setSkillAdd} />
            <Tooltip
                disableFocusListener
                placement='top'
                title={<Typography variant='body2'>
                    {skillTooltip[hoverLevel !== -1 ? hoverLevel : level]}
                </Typography>}
            >
                <Grid container alignItems='center' justifyContent='center'>
                    <Rating
                        name='skill-level'
                        value={level}
                        onChange={(event, value) => {
                            if (value < 1) {
                                setLevel(2);
                            } else {
                                setLevel(value);
                            }
                        }}
                        onChangeActive={(event, hover) => {
                            setHoverLevel(hover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.25, color: iconColor }} fontSize="inherit" />}
                    />
                    <Typography sx={{ fontWeight: 500, width: '150px', ml: 2, textAlign: 'center' }} variant='body1'>{skillLabel[hoverLevel !== -1 ? hoverLevel : level]}</Typography>
                </Grid>
            </Tooltip>
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type="submit" variant='outlined' startIcon={<Add />}>Add skill</Button>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Skill added!
                </Alert>
            </Snackbar>
        </StyledForm>
    )
}

export default SkillsAddForm;