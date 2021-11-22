import { Alert, Button, CardContent, Grid, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { useAuth } from '../../auth/AuthContext'
import { StyledForm } from './StyledForm'
import GeneralInput from './GeneralInput'
import { ButtonContainer, CustomStyledForm, ForgotPassword, PasswordContainer } from './LandingStyledComponents';

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnack, setOpenSnack] = useState(false);
    const { setCurrentUser } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setCurrentUser(email, password)
            .then((status) => {
                if (status !== undefined) {
                    throw Error('Invalid email or password')
                }
                navigate('/login/success');
            }).catch(err => setOpenSnack(true))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSnack(false)
    }


    return (
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center' sx={{height: '100%'}} justifyContent='center'>
                <Typography variant='h4' component='h1' sx={{mb: 4, fontWeight: 500}}>Welcome Back!</Typography>
                <CustomStyledForm onSubmit={event => { handleSubmit(event) }} >
                    <GeneralInput onChange={(event) => {
                        setEmail(event.target.value);
                    }} id='email' label='E-mail' variant='outlined' type="email" required />
                    <PasswordContainer>
                    <GeneralInput onChange={(event) => {
                        setPassword(event.target.value);
                    }} id='password' label='Password' variant='outlined' type="password" required />
                    <ForgotPassword to='/forgot-password'>Recover password</ForgotPassword>
                    </PasswordContainer>
                    <ButtonContainer>
                    <Button type="submit" variant="contained" >Login</Button>
                    <Button component={Link} to="/register" variant="outlined" >Register</Button>
                    </ButtonContainer>
                </CustomStyledForm>
                <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert severity="error">
                        Invalid email or password
                    </Alert>
                </Snackbar>
            </Grid>
        </CardContent>

    )
}

export default LoginCard;