import React, { useEffect, useState } from 'react'
import { useAuth } from '../../auth/AuthContext';
import { getAllSkills } from '../../core/services/skill.service'
import { makeStyles } from '@mui/styles';
import { Autocomplete, CircularProgress, Paper } from '@mui/material';

import StyledInput from './StyledInput';

import { darkerPrimaryColour, iconColor } from '../../core/utils/Variables';

const useStyles = makeStyles(theme => ({
    clearIndicator: {
        color: iconColor,
    },
    popupIndicator: {
        color: iconColor
    }
}));

const CustomPaper = (props) => {
    return <Paper elevation={8} sx={{ background: darkerPrimaryColour }} {...props} />;
};

const SkillsAutoComplete = (props) => {
    const { token } = useAuth();
    const [open, setOpen] = useState(false);
    const [skillsOptions, setSkillsOptions] = useState([]);
    const loading = open && skillsOptions.length === 0;
    const classes = useStyles();
    
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
    }, [loading, token])

    useEffect(() => {
        if (!open) {
            setSkillsOptions([]);
        }
    }, [open]);


    return (
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
            props.setSkillAdd(value);
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
            <StyledInput
                {...params}
                label='Search Skills'
                required
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                        <React.Fragment>
                            {loading ? <CircularProgress sx={{ color: iconColor }} size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                    )
                }}
            />
        )}
    />
    )
}

export default SkillsAutoComplete;