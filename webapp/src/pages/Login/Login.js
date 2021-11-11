import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../../components/Container'

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

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Title>Welcome Back!</Title>
            <StyledForm onSubmit={(event) => {
                event.preventDefault();
            }}>
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




