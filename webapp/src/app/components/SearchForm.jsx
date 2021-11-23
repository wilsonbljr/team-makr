import React from 'react'
import { useSkills } from '../../core/hooks/useSkills';
import { Alert, Button, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';
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


const SearchForm = (props) => {
    const classes = useStyles();
    const { allSkills } = useSkills();

    return (
        <StyledForm onSubmit={event => { props.search(event) }}>
            <GeneralInput onChange={event => {
                props.setNameFilter(event.target.value);
            }}
                id='name'
                label='Name'
                variant='outlined'
                value={props.nameFilter}
                type="text"
            />
            <GeneralInput
                labelid='skillSelectLabel'
                id='skillSelect'
                value={props.skillFilter}
                label='Select Skill'
                onChange={event => {
                    props.setSkillFilter(event.target.value);
                }}
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
                <MenuItem value={null}>None</MenuItem>
                {allSkills.map(skill => (
                    <MenuItem key={skill.id} value={skill.id}>{skill.name}</MenuItem>
                ))}
            </GeneralInput>
            {props.alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type='submit' variant='contained' color='primary' startIcon={<Search />}>Search</Button>
        </StyledForm>
    )
}

export default SearchForm;