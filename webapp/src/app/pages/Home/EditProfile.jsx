import React, { useEffect, useState } from 'react';
import { Button, Alert, Snackbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import Container from '../../components/Container'
import { updateUser } from '../../../core/services/user.service'
import { getUser } from '../../../core/services/user.service';
import { useAuth } from '../../../auth/AuthContext';
import GeneralInput from '../../components/GeneralInput';

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

const EditProfile = () => {
    const [userInfo, setUserInfo] = useState({ firstName: '', lastName: '', email: '' });
    const [snack, setSnack] = useState(false);
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const { user, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        getUser(user, setUserInfo, token);
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        updateUser(user, pronouns, phone, password, token).then(res => {
            if (res.status === 201) {
                setSnack(true);
                setTimeout(() => {
                    navigate('/home');
                }, 2500)
            }
        }).catch(err => {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        });
    };

    const closeSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnack(false)
    }

    return (
        <Container>
            <Title>Edit your profile</Title>
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <StyledForm onSubmit={event => { handleSubmit(event) }}>
                <GeneralInput id='name' label='Name' value={userInfo.firstName + ' ' + userInfo.lastName} disabled variant='outlined' type="text" />
                <GeneralInput onChange={(event) => {
                    setPronouns(event.target.value);
                }} id='pronoun' label='Pronouns' variant='outlined' type="text" />
                <GeneralInput onChange={(event) => {
                    setPhone(event.target.value);
                }} id='phone' label='Phone Number' variant='outlined' type="tel" />
                <GeneralInput id='email' label='E-mail' InputLabelProps={{ shrink: true }} disabled value={userInfo.email} variant='outlined' type="email" />
                <GeneralInput onChange={(event) => {
                    setPassword(event.target.value);
                }} id='password' label='Password' variant='outlined' type="password" />
                <ButtonContainer>
                    <Button type="submit" variant="contained" >Register</Button>
                    <Button component={Link} to="/home" variant="outlined" >Back to Home</Button>
                </ButtonContainer>
            </StyledForm>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success">
                    Profile Updated!
                </Alert>
            </Snackbar>
        </Container>
    )
}


export default EditProfile