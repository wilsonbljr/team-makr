import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import successImg from '../../assets/images/loginsuccess.svg'
import { Typography } from '@mui/material';
import TransitionContainer from '../../components/TransitionContainer';
import TransitionImage from '../../components/TransitionImage';


const SuccessfulRegister = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/login'), 5000)
    })
    return (
        <TransitionContainer>
            <TransitionImage src={successImg} />
            <Typography sx={{ mt: 2, fontWeight: 700 }} variant="h4" component="h1">Register successful</Typography>
            <Typography variant="h5" component="h2">Redirecting to login</Typography>
        </TransitionContainer>
    )
}

export default SuccessfulRegister;