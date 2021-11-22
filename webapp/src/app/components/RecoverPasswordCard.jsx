import React, { useState } from 'react';
import { Alert, Button, CardContent, Grid, Snackbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { forgotPasswordEmail } from '../../core/services/password.service';
import GeneralInput from './GeneralInput';
import { StyledForm } from './StyledForm';

const CustomStyledForm = styled(StyledForm)`
    width: 100%;
    max-width: 400px;
    gap: 2vh;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
`


function handleEmail(event, email, snack, snackError) {
    event.preventDefault();
    forgotPasswordEmail(email).then(() => {
        snack(true)
    }).catch((error) => {
        snackError(true)
    });
}


function handleReset(event, email, snack) {
    event.preventDefault();
    forgotPasswordEmail(email).then(() => {
        snack(true)
    }).catch((error) => {
        snack(true)
    });
}


const RecoverPasswordCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackSent, setSnackSent] = useState(false)
    const [snackError, setSnackError] = useState(false)
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackSent(false)
        setSnackError(false)
    }

    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center' sx={{ height: '100%' }} justifyContent='center'>
                <Typography variant='h4' component='h1' sx={{ mb: 4, fontWeight: 500 }}>Recover password</Typography>
                <CustomStyledForm onSubmit={event => { handleEmail(event, email, setSnackSent, setSnackError) }}>
                    <GeneralInput onChange={(event) => {
                        setEmail(event.target.value);
                    }} id='email' label='E-mail' variant='outlined' type="email" required />
                    <Button type="submit" variant="contained" sx={{mb: 5}} >Send Token</Button>
                </CustomStyledForm>

                <CustomStyledForm onSubmit={event => { handleReset(event, email, setSnackSent) }}>
                    <GeneralInput onChange={(event) => {
                        setPassword(event.target.value);
                    }} id='token' label='Token' variant='outlined' type="text" required />
                    <GeneralInput onChange={(event) => {
                        setPassword(event.target.value);
                    }} id='password' label='New Password' variant='outlined' type="password" required />
                    <ButtonContainer>
                        <Button type="submit" variant="contained" >Change password</Button>
                        <Button component={Link} to="/login" variant="contained" >Back to login</Button>
                    </ButtonContainer>
                </CustomStyledForm>
                <Snackbar open={snackSent} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="success">
                        Email sent
                    </Alert>
                </Snackbar>
                <Snackbar open={snackError} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="error">
                        Internal server error
                    </Alert>
                </Snackbar>
            </Grid>
        </CardContent>
    )
}


export default RecoverPasswordCard;