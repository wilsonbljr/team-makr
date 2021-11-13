import React, { useEffect, useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Container from '../../components/Container'
import { registerUser } from '../../services/auth';
import { getUser } from '../../services/user';

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

function handleSubmit(event, name, pronouns, phone, email, password, navigate, setAlert) {
    event.preventDefault();
    registerUser(name, pronouns, phone, email, password).then((res) => {
        if (res.status === 201) {
            navigate('/login');
        }
        
    }).catch(error => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    })
};

const EditProfile = () => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getUser(sessionStorage.getItem('user'), setUser);
    }, [])

    return (
        <Container>
            <Title>Edit your profile</Title>
            <StyledForm onSubmit={event => { handleSubmit(event, name, pronouns, phone, email, password, navigate, setAlert) }}>
                <TextField onChange={(event) => {
                    setName(event.target.value);
                }} id='name' label='Name' value={user.firstName + ' ' + user.lastName} disabled variant='outlined' type="text" />
                <TextField onChange={(event) => {
                    setPronouns(event.target.value);
                }} id='pronoun' label='Pronouns' variant='outlined' type="text" />
                <TextField onChange={(event) => {
                    setPhone(event.target.value);
                }} id='phone' label='Phone Number' variant='outlined' type="tel" />
                <TextField onChange={(event) => {
                    setEmail(event.target.value);
                }} id='email' label='E-mail' InputLabelProps={{ shrink: true }} disabled value={user.email} variant='outlined' type="email" />
                <TextField onChange={(event) => {
                    setPassword(event.target.value);
                }} id='password' label='Password' variant='outlined' type="password" />

                <ButtonContainer>
                    <Button type="submit" variant="contained" >Register</Button>
                    <Button component={Link} to="/home" variant="contained" >Back to Home</Button>
                </ButtonContainer>
            </StyledForm>
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
        </Container>
    )
}


export default EditProfile