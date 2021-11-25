import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useValidate from '../../core/hooks/useValidate';
import { registerUser } from '../../core/services/user.service';
import { Button, Snackbar, Alert, CardContent, Grid, Typography } from '@mui/material';

import StyledInput from './StyledInput';
import { ButtonContainer, CustomStyledForm } from './StyledLandingComponents';


const RegisterCard = () => {
    const { errors, handleValidation } = useValidate();
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnack, setOpenSnack] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (!errors.password.error || !errors.pronouns.error || !errors.phone_number.error || !errors.name.error) {
            registerUser(name, pronouns, phone, email, password).then((res) => {
                if (res.status === 201) {
                    navigate('/register/success');
                } else {
                    setOpenSnack(true)
                }
            })
        }
    };

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
                <CustomStyledForm onSubmit={event => { handleSubmit(event) }}>
                    <StyledInput
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        error={name === '' ? false : errors.name.error}
                        helperText={name === '' ? false : errors.name.errorText}
                        id='name'
                        label='Name'
                        variant='outlined'
                        type="text"
                        required
                        onBlur={() => { handleValidation({ name }) }}
                    />
                    <StyledInput
                        onChange={(event) => {
                            setPronouns(event.target.value);
                        }}
                        error={pronouns === '' ? false : errors.pronouns.error}
                        helperText={pronouns === '' ? false : errors.pronouns.errorText}
                        id='pronoun'
                        label='Pronouns'
                        variant='outlined'
                        type="text"
                        onBlur={() => { handleValidation({ pronouns }) }}
                    />
                    <StyledInput
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                        error={phone === '' ? false : errors.phone_number.error}
                        helperText={phone === '' ? false : errors.phone_number.errorText}
                        id='phone'
                        label='Phone Number'
                        variant='outlined'
                        type="tel"
                        onBlur={() => { handleValidation({ phone_number: phone }) }}
                    />
                    <StyledInput
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        id='email'
                        label='E-mail'
                        variant='outlined'
                        type="email"
                        required
                    />
                    <StyledInput
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        error={password === '' ? false : errors.password.error}
                        helperText={password === '' ? false : errors.password.errorText}
                        id='password'
                        label='Password'
                        variant='outlined'
                        type="password"
                        required
                        onBlur={() => { handleValidation({ password }) }}
                    />

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


