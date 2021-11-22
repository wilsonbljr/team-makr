import React, { useState } from 'react';
import { Button, Snackbar, Alert, CardContent, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../core/services/user.service';
import GeneralInput from './GeneralInput';
import { ButtonContainer, CustomStyledForm } from './LandingStyledComponents';


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

const RegisterCard = () => {
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
        <CardContent sx={{ p: 2, pt: 4, height: '100%' }}>
            <Grid container flexDirection='column' alignItems='center' sx={{ height: '100%' }} justifyContent='center'>
                <Typography variant='h4' component='h1' sx={{ mb: 4, fontWeight: 500 }}>Register Account</Typography>
                <CustomStyledForm onSubmit={event => { handleSubmit(event, name, pronouns, phone, email, password, navigate, setOpenSnack) }}>
                    <GeneralInput onChange={(event) => {
                        setName(event.target.value);
                    }} id='name' label='Name' variant='outlined' type="text" required />
                    <GeneralInput onChange={(event) => {
                        setPronouns(event.target.value);
                    }} id='pronoun' label='Pronouns' variant='outlined' type="text" />
                    <GeneralInput onChange={(event) => {
                        setPhone(event.target.value);
                    }} id='phone' label='Phone Number' variant='outlined' type="tel" />
                    <GeneralInput onChange={(event) => {
                        setEmail(event.target.value);
                    }} id='email' label='E-mail' variant='outlined' type="email" required />
                    <GeneralInput onChange={(event) => {
                        setPassword(event.target.value);
                    }} id='password' label='Password' variant='outlined' type="password" required />

                    <ButtonContainer>
                        <Button type="submit" variant="contained" >Register</Button>
                        <Button component={Link} to="/login" variant="outlined" >Back to Login</Button>
                    </ButtonContainer>
                </CustomStyledForm>
                <Snackbar open={openSnack} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                    <Alert severity="error">
                        Email already exists
                    </Alert>
                </Snackbar>
            </Grid>
        </CardContent>
    )
}

export default RegisterCard;


