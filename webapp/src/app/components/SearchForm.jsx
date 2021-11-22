import React, { useState } from 'react'
import { useAuth } from '../../auth/AuthContext';
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


const SearchForm = () => {
    const { user, token } = useAuth();
    const { skills } = useSkills();
    const [nameFilter, setNameFilter] = useState('');
    const [skillFilter, setSkillFilter] = useState('');
    const classes = useStyles();

    const [alert, setAlert] = useState(false);

    async function searchUsers(event) {
        event.preventDefault();
    }

    return (
        <StyledForm onSubmit={event => { searchUsers(event) }}>
            <GeneralInput onChange={(event) => {
                setNameFilter(event.target.value);
            }} id='name' label='Name' variant='outlined' value={nameFilter} type="text" />
            <GeneralInput
                labelId='skillSelectLabel'
                id='skillSelect'
                value={skillFilter}
                label='Select Skill'
                onChange={(event) => setSkillFilter(event.target.value)}
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
            <Button type='submit' variant='contained' color='primary' startIcon={<Search />}>Search</Button>
        </StyledForm>
    )
}

export default SearchForm;