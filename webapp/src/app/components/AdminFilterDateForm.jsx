import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';

const CustomStyledForm = styled(StyledForm)`
    flex-direction: row;
    width: 100%;
    gap: 2vh;
`

const AdminFilterDateForm = (props) => {

    return (
        <CustomStyledForm onSubmit={event => { props.filter(event) }}>
            <StyledInput
                id='initialDate'
                label='Initial Date'
                value={props.initialDate}
                variant='outlined'
                type="text"
                onChange={(event) => { props.setInitialDate(event.target.value) }}
                required
            />
            <StyledInput
                id='finalDate'
                label='Final Date'
                value={props.finalDate}
                variant='outlined'
                type="text"
                onChange={(event) => { props.setFinalDate(event.target.value) }}
                required
            />
            <Button type="submit" variant="outlined" endIcon={<Search />} >Filter</Button>
        </CustomStyledForm>
    )
}

export default AdminFilterDateForm;