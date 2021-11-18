import React, { useState } from 'react';
import { Alert, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import Image from 'mui-image'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../../components/Container'
import { login } from '../../../auth/auth'
import desktop from '../../../assets/desktop.svg'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5vh;
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

const ForgotPassword = styled(Link)`
    text-decoration: none;
    color: black;
    text-align: right;
    margin-top: 1vh;
`

const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function handleSubmit(event, email, password, navigate, snack) {
    event.preventDefault();
    login(email, password).then(() => {
        navigate('/login/success');
    }).catch((error) => {
        snack(true)
    });
}


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnack, setOpenSnack] = useState(false)
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSnack(false)
    }

    return (
        <Grid container>
            <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Container>
                    <Image src={desktop} />
                    <Typography variant="h5" component="h1" >Team Makr is the best place to start your projects</Typography>
                </Container>
            </Grid>
            <Grid item xs={12} md={4}>
                <Container maxWidth='sm'>
                    <Title>Welcome Back!</Title>
                    <StyledForm onSubmit={event => { handleSubmit(event, email, password, navigate, setOpenSnack) }}>
                        <TextField onChange={(event) => {
                            setEmail(event.target.value);
                        }} id='email' label='E-mail' variant='outlined' type="email" required />
                        <PasswordContainer>
                            <TextField onChange={(event) => {
                                setPassword(event.target.value);
                            }} id='password' label='Password' variant='outlined' type="password" required />
                            <ForgotPassword to='/forgot-password'>Recover password</ForgotPassword>
                        </PasswordContainer>
                        <ButtonContainer>
                            <Button type="submit" variant="contained" >Login</Button>
                            <Button component={Link} to="/register" variant="contained" >Register</Button>
                        </ButtonContainer>
                    </StyledForm>
                    <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert severity="error">
                            Invalid email or password
                        </Alert>
                    </Snackbar>
                </Container>
            </Grid>
        </Grid>
    )
}


export default Login




