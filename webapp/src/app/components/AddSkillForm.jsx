import React, { useEffect, useState } from 'react'
import { useAuth } from '../../auth/AuthContext';
import { useSkills } from '../../core/hooks/useSkills';
import { addUserToSkill, getAllSkills } from '../../core/services/skill.service';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { Alert, Autocomplete, Button, CircularProgress, Grid, Paper, Rating, Snackbar, TextField, Tooltip, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GeneralInput from './GeneralInput';
import { skillLabel, skillTooltip } from '../../core/utils/Lists';
import { darkerPrimaryColour } from '../../core/utils/Variables';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

const useStyles = makeStyles(theme => ({
    clearIndicator: {
        color: "white",
    },
    popupIndicator: {
        color: "white"
    }
}));

const CustomPaper = (props) => {
    return <Paper elevation={8} sx={{ background: darkerPrimaryColour }} {...props} />;
};


const AddSkillForm = () => {
    const { user, token } = useAuth();
    const { setCurrentUserSkills } = useSkills();
    const classes = useStyles();

    const [alert, setAlert] = useState(false);
    const [snack, setSnack] = useState(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);

    const [level, setLevel] = useState(2);
    const [hoverLevel, setHoverLevel] = useState(-1);
    const [skillAdd, setSkillAdd] = useState('');

    const [open, setOpen] = useState(false);
    const [skillsOptions, setSkillsOptions] = useState([]);
    const loading = open && skillsOptions.length === 0;

    useEffect(() => {
        let active = true

        if (!loading) {
            return undefined
        }

        (async () => {
            if (active) {
                await getAllSkills(setSkillsOptions, token)
            }
        })();

        return () => active = false;
    }, [loading])

    useEffect(() => {
        if (!open) {
            setSkillsOptions([]);
        }
    }, [open]);


    async function addSkillToPerson(event) {
        event.preventDefault();
        await addUserToSkill(user, skillAdd.id, level, token)
            .then(res => {
                if (res < 202) {
                    openSnack();
                    setCurrentUserSkills(user, token);
                }
            })
            .catch(err => err.message);

    }

    return (
        <StyledForm onSubmit={event => { addSkillToPerson(event) }}>
            <Autocomplete
                id='skillname'
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onChange={(event, value) => {
                    setSkillAdd(value);
                }}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name}
                options={skillsOptions}
                loading={loading}
                PaperComponent={CustomPaper}
                classes={{
                    clearIndicator: classes.clearIndicator,
                    popupIndicator: classes.popupIndicator
                }}
                renderInput={(params) => (
                    <GeneralInput
                        {...params}
                        label='Search Skills'
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            )
                        }}
                    />
                )}
            />
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
                        emptyIcon={<StarIcon style={{ opacity: 0.25, color: 'white' }} fontSize="inherit" />}
                        sx={{ mt: 1 }}
                    />
                    <Typography sx={{ fontWeight: 500, width: '150px', ml: 2, mt: 1, textAlign: 'center' }} variant='body1'>{skillLabel[hoverLevel !== -1 ? hoverLevel : level]}</Typography>
                </Grid>
            </Tooltip>
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type="submit" variant='outlined'>Add skill</Button>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Skill added!
                </Alert>
            </Snackbar>
        </StyledForm>
    )
}

export default AddSkillForm;