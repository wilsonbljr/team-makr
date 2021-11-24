import React, { useState } from 'react'
import { useAuth } from '../../auth/AuthContext';
import { useUserInfo } from '../../core/hooks/useUserInfo';
import { updateUser } from '../../core/services/user.service';

import { Alert, Button } from '@mui/material';

import StyledForm from './StyledForm';
import StyledInput from './StyledInput'

const HomeEditProfileForm = (props) => {
    const { user, token } = useAuth();
    const { setCurrentUserInfo, firstName, lastName, email } = useUserInfo();
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);


    const editForm = event => {
        event.preventDefault();
        updateUser(user, pronouns, phone, password, token).then(async res => {
            if (res.status === 201) {
                await setCurrentUserInfo(user, token);
                props.closeModal();
                props.openSnack();
            }
        }).catch(err => {
            console.log(err)
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 3000);
        });
    };

    return (
        <StyledForm onSubmit={event => { editForm(event) }}>
            <StyledInput id='name' label='Name' value={firstName + ' ' + lastName} disabled variant='outlined' type="text" />
            <StyledInput onChange={(event) => {
                setPronouns(event.target.value);
            }} id='pronoun' label='Pronouns' variant='outlined' type="text" />
            <StyledInput onChange={(event) => {
                setPhone(event.target.value);
            }} id='phone' label='Phone Number' variant='outlined' type="tel" />
            <StyledInput id='email' label='E-mail' InputLabelProps={{ shrink: true }} disabled value={email} variant='outlined' type="email" />
            <StyledInput onChange={(event) => {
                setPassword(event.target.value);
            }} id='password' label='Password' variant='outlined' type="password" />
            {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
            <Button type="submit" variant="outlined" >Edit Profile</Button>
        </StyledForm>
    )
}

export default HomeEditProfileForm;