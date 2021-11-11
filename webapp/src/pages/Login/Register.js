import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../../components/Container'

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

const Register = () => {
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Title>Register Account</Title>
            <StyledForm onSubmit={(event) => {
                event.preventDefault();
            }}>
                <TextField onChange={(event) => {
                    setName(event.target.value);
                }} id='name' label='Name' variant='outlined' type="text" />
                <TextField onChange={(event) => {
                    setPronouns(event.target.value);
                }} id='pronoun' label='Pronouns' variant='outlined' type="text" />
                <TextField onChange={(event) => {
                    setPhone(event.target.value);
                }} id='phone' label='Phone Number' variant='outlined' type="tel" />
                <TextField onChange={(event) => {
                    setEmail(event.target.value);
                }} id='email' label='E-mail' variant='outlined' type="email" />
                    <TextField onChange={(event) => {
                        setPassword(event.target.value);
                    }} id='password' label='Password' variant='outlined' type="password" />

                <ButtonContainer>
                    <Button type="submit" variant="contained" >Register</Button>
                    <Button component={Link} to="/login" variant="contained" >Back to Login</Button>
                </ButtonContainer>
            </StyledForm>
        </Container>
    )
}


export default Register


