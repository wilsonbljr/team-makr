import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import useValidate from '../../core/hooks/useValidate';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, CardContent, Grid, Snackbar, Typography } from '@mui/material';

import { ButtonContainer, CustomStyledForm, ForgotPassword, PasswordContainer } from './StyledLandingComponents';
import StyledInput from './StyledInput'

const LoginCard = () => {
    const { setCurrentUser } = useAuth();
    const navigate = useNavigate();
    const { errors, handleValidation } = useValidate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnack, setOpenSnack] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (!errors.password.error) {
            setCurrentUser(email, password)
                .then((status) => {
                    if (status !== undefined) {
                        throw Error('Invalid email or password')
                    }
                    navigate('/login/success');
                }).catch(err => setOpenSnack(true))
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSnack(false)
    }


    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center' sx={{ height: '100%' }} justifyContent='center'>
                <Typography variant='h4' component='h1' sx={{ mb: 4, fontWeight: 500 }}>Welcome Back!</Typography>
                <CustomStyledForm onSubmit={event => { handleSubmit(event) }} >
                    <StyledInput
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        id='email'
                        label='E-mail'
                        variant='outlined'
                        type="email"
                        required
                    />
                    <PasswordContainer>
                        <StyledInput onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                            error={errors.password.error}
                            helperText={errors.password.errorText}
                            id='password'
                            label='Password'
                            variant='outlined'
                            type="password"
                            required
                            onBlur={() => { handleValidation({ password }) }}
                        />
                        <ForgotPassword to='/forgot-password'>Recover password</ForgotPassword>
                    </PasswordContainer>
                    <ButtonContainer>
                        <Button type="submit" variant="contained">Login</Button>
                        <Button component={Link} to="/register" variant="outlined" >Register</Button>
                    </ButtonContainer>
                </CustomStyledForm>
                <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert severity="error">
                        Invalid email or password
                    </Alert>
                </Snackbar>
            </Grid>
        </CardContent>

    )
}

export default LoginCard;