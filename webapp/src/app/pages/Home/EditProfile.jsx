import React, { useEffect, useState } from 'react';
import { Button, TextField, Alert, Snackbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import Container from '../../components/Container'
import { updateUser } from '../../../core/services/user.service'
import { getUser } from '../../../core/services/user.service';

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

function handleSubmit(event, userid, pronouns, phone, password, navigate, setAlert, setSnack) {
    event.preventDefault();
    updateUser(userid, pronouns, phone, password).then((res) => {
        if (res.status === 200) {
            setSnack(true)
            setTimeout(() => {
                navigate('/home')
            }, 3000)
        }
    }).catch(error => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    })
};

const EditProfile = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
    const [name, setName] = useState('');
    const [snack, setSnack] = useState(false);
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getUser(sessionStorage.getItem('user'), setUser);
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnack(false)
    }

    return (
        <Container>
            <Title>Edit your profile</Title>
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <StyledForm onSubmit={event => { handleSubmit(event, user.id, pronouns, phone, password, navigate, setAlert, setSnack) }}>
                <TextField id='name' label='Name' value={user.firstName + ' ' + user.lastName} disabled variant='outlined' type="text" />
                <TextField onChange={(event) => {
                    setPronouns(event.target.value);
                }} id='pronoun' label='Pronouns' variant='outlined' type="text" />
                <TextField onChange={(event) => {
                    setPhone(event.target.value);
                }} id='phone' label='Phone Number' variant='outlined' type="tel" />
                <TextField id='email' label='E-mail' InputLabelProps={{ shrink: true }} disabled value={user.email} variant='outlined' type="email" />
                <TextField onChange={(event) => {
                    setPassword(event.target.value);
                }} id='password' label='Password' variant='outlined' type="password" />

                <ButtonContainer>
                    <Button type="submit" variant="contained" >Register</Button>
                    <Button component={Link} to="/home" variant="contained" >Back to Home</Button>
                </ButtonContainer>
            </StyledForm>
            <Snackbar open={snack} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success">
                    Profile Updated!
                </Alert>
            </Snackbar>

        </Container>
    )
}


export default EditProfile