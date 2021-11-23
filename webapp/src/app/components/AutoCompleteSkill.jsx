import React, { useEffect, useState } from 'react'
import { useAuth } from '../../auth/AuthContext';
import { getAllSkills } from '../../core/services/skill.service'
import GeneralInput from './GeneralInput';
import { makeStyles } from '@mui/styles';
import { Autocomplete, CircularProgress, Paper } from '@mui/material';
import { darkerPrimaryColour } from '../../core/utils/Variables';

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

const AutoCompleteSkill = (props) => {
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
    )
}

export default AutoCompleteSkill;