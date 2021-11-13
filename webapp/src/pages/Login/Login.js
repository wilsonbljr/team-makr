import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../../components/Container'
import { login } from '../../services/auth';

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
    text-align: right;
    margin-top: 1vh;
`

const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function handleSubmit(event, email, password, navigate) {
    event.preventDefault();
    login(email, password).then(() => {
        navigate('/login/success');
    });
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Welcome Back!</Title>
            <StyledForm onSubmit={event => {handleSubmit(event, email, password, navigate)}}>
                <TextField onChange={(event) => {
                    setEmail(event.target.value);
                }} id='email' label='E-mail' variant='outlined' type="email" />
                <PasswordContainer>
                    <TextField onChange={(event) => {
                        setPassword(event.target.value);
                    }} id='password' label='Password' variant='outlined' type="password" />
                    <ForgotPassword to='/forgot-password'>Forgot password?</ForgotPassword>
                </PasswordContainer>
                <ButtonContainer>
                    <Button type="submit" variant="contained" >Login</Button>
                    <Button component={Link} to="/register" variant="contained" >Register</Button>
                </ButtonContainer>
            </StyledForm>
        </Container>
    )
}


export default Login




