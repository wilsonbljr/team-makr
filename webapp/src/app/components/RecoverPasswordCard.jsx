import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useValidate from '../../core/hooks/useValidate';
import { forgotPasswordEmail, resetPassword } from '../../core/services/password.service';
import styled from 'styled-components';
import { Alert, Button, CardContent, Grid, Snackbar, Typography } from '@mui/material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput';

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

const RecoverPasswordCard = () => {
    const { errors, handleValidation } = useValidate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToken, setPasswordToken] = useState('');
    const [snackSent, setSnackSent] = useState(false);
    const [snackError, setSnackError] = useState(false);
    const [snackMessage, setSnackMessage] = useState('');
    const navigate = useNavigate();

    const closeSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackSent(false)
        setSnackError(false)
    }

    function sendRecoveryEmail(event) {
        event.preventDefault();
        forgotPasswordEmail(email).then((res) => {
            if (res.status === 200) {
                setSnackSent(true)
            } else {
                setSnackMessage('E-mail not found')
                setSnackError(true)
            }
        }).catch((error) => {
            setSnackMessage('Internal server error')
            setSnackError(true)
        });
    }

    function resetPasswordForm(event) {
        event.preventDefault();
        if (!errors.password.error) {
            resetPassword(email, password, passwordToken).then(() => {
                navigate('/forgot-password/success')
            }).catch((error) => {
                setSnackMessage('Internal server error')
                setSnackError(true)
            });
        }
    }

    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center' sx={{ height: '100%' }} justifyContent='center'>
                <Typography variant='h4' component='h1' sx={{ mb: 4, fontWeight: 500 }}>Recover password</Typography>
                <CustomStyledForm onSubmit={event => { sendRecoveryEmail(event) }}>
                    <StyledInput onChange={(event) => {
                        setEmail(event.target.value);
                    }} id='email' label='E-mail' variant='outlined' type="email" required />
                    <Button type="submit" variant="contained" sx={{ mb: 5 }} >Send Token</Button>
                </CustomStyledForm>

                <CustomStyledForm onSubmit={event => { resetPasswordForm(event, email, setSnackSent) }}>
                    <StyledInput onChange={(event) => {
                        setPasswordToken(event.target.value);
                    }} id='token' label='Token' variant='outlined' type="text" required />
                    <StyledInput
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        error={errors.password.error}
                        helperText={errors.password.errorText}
                        id='password'
                        label='New Password'
                        variant='outlined'
                        type="password"
                        required
                        onBlur={() => { handleValidation({ password }) }}
                    />
                    <ButtonContainer>
                        <Button type="submit" variant="contained" >Change password</Button>
                        <Button component={Link} to="/login" variant="outlined" >Back to login</Button>
                    </ButtonContainer>
                </CustomStyledForm>
                <Snackbar open={snackSent} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert severity="success">
                        Email sent
                    </Alert>
                </Snackbar>
                <Snackbar open={snackError} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert severity="error">
                        {snackMessage}
                    </Alert>
                </Snackbar>
            </Grid>
        </CardContent>
    )
}


export default RecoverPasswordCard;