import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Typography } from '@mui/material';
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
        <CustomStyledForm onSubmit={event => { props.getLogsForm(event) }}>
            <StyledInput
                id='initialDate'
                label='Initial Date'
                value={props.initialDate}
                variant='outlined'
                type="text"
                onChange={(event) => { props.setInitialDate(event.target.value) }}
                helperText='YYYY-MM-DD'
                required
            />
            <StyledInput
                id='finalDate'
                label='Final Date'
                value={props.finalDate}
                variant='outlined'
                type="text"
                onChange={(event) => { props.setFinalDate(event.target.value) }}
                helperText='YYYY-MM-DD'
                required
            />
            <Grid container flexDirection='column' sx={{maxWidth: '170px', textAlign: 'center'}}>
                <Button type="submit" variant="outlined" endIcon={<Search />} sx={{ height: '55px', mb: 0.4 }}>Filter</Button>
                <Typography variant='caption'>Press filter to search</Typography>
            </Grid>
        </CustomStyledForm>
    )
}

export default AdminFilterDateForm;