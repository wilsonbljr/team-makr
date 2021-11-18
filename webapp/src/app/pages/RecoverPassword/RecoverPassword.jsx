import React, { useState } from 'react';
import { Alert, Button, Snackbar, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../../components/Container'
import { forgotPasswordEmail } from '../../../core/services/password.service';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 1.75em;
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


const RecoverPassword = () => {
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
        <Container>
            <Title>Recover password</Title>

            <StyledForm onSubmit={event => { handleEmail(event, email, setSnackSent, setSnackError) }}>
                <TextField onChange={(event) => {
                    setEmail(event.target.value);
                }} id='email' label='E-mail' variant='outlined' type="email" required />
                <Button type="submit" variant="contained" >Send Token</Button>
            </StyledForm>

            <StyledForm onSubmit={event => { handleReset(event, email, setSnackSent) }}>
            <TextField onChange={(event) => {
                    setPassword(event.target.value);
                }} id='token' label='Token' variant='outlined' type="text" required />
                <TextField onChange={(event) => {
                    setPassword(event.target.value);
                }} id='password' label='New Password' variant='outlined' type="password" required />
                <ButtonContainer>
                    <Button type="submit" variant="contained" >Change password</Button>
                    <Button component={Link} to="/login" variant="contained" >Back to login</Button>
                </ButtonContainer>
            </StyledForm>
            <Snackbar open={snackSent} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success">
                    Email sent
                </Alert>
            </Snackbar>
            <Snackbar open={snackError} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="error">
                    Internal server error
                </Alert>
            </Snackbar>
        </Container>
    )
}


export default RecoverPassword