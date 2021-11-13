import React, { useState } from 'react';
import { Button, TextField, Snackbar, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../../components/Container'
import { registerUser } from '../../services/auth';

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

function handleSubmit(event, name, pronouns, phone, email, password, navigate, snack) {
    event.preventDefault();
    registerUser(name, pronouns, phone, email, password).then((res) => {
        if (res.status === 201) {
            navigate('/register/success');
        } else {
            snack(true)
        }
    })
};

const Register = () => {
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
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
            <Container>
                <Title>Register Account</Title>
                <StyledForm onSubmit={event => { handleSubmit(event, name, pronouns, phone, email, password, navigate, setOpenSnack) }}>
                    <TextField onChange={(event) => {
                        setName(event.target.value);
                    }} id='name' label='Name' variant='outlined' type="text" required/>
                    <TextField onChange={(event) => {
                        setPronouns(event.target.value);
                    }} id='pronoun' label='Pronouns' variant='outlined' type="text" />
                    <TextField onChange={(event) => {
                        setPhone(event.target.value);
                    }} id='phone' label='Phone Number' variant='outlined' type="tel" />
                    <TextField onChange={(event) => {
                        setEmail(event.target.value);
                    }} id='email' label='E-mail' variant='outlined' type="email" required/>
                    <TextField onChange={(event) => {
                        setPassword(event.target.value);
                    }} id='password' label='Password' variant='outlined' type="password" required/>

                    <ButtonContainer>
                        <Button type="submit" variant="contained" >Register</Button>
                        <Button component={Link} to="/login" variant="contained" >Back to Login</Button>
                    </ButtonContainer>
                </StyledForm>
                <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert severity="error">
                        Email already exists
                    </Alert>
                </Snackbar>
            </Container>
        )
    }

export default Register


