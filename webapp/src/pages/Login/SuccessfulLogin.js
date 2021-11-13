import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import successImg from '../../assets/images/loginsuccess.svg'
import { Typography } from '@mui/material';
import TransitionContainer from '../../components/TransitionContainer';
import TransitionImage from '../../components/TransitionImage';


const SuccessfulLogin = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/home'), 5000)
    })
    return (
        <TransitionContainer>
            <TransitionImage src={successImg} />
            <Typography sx={{ mt: 2, fontWeight: 700 }} variant="h4" component="h1">Login successful</Typography>
            <Typography variant="h5" component="h2">Redirecting to your home</Typography>
        </TransitionContainer>
    )
}

export default SuccessfulLogin;