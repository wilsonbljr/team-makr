import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import successImg from '../../assets/images/logout.svg'
import { Typography } from '@mui/material';
import TransitionContainer from '../../components/TransitionContainer';
import TransitionImage from '../../components/TransitionImage';

const SuccessfulLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 5000)
    })
    return (
        <TransitionContainer>
            <TransitionImage src={successImg} />
            <Typography sx={{ mt: 2, fontWeight: 700 }} variant="h4" component="h1">Logout successful</Typography>
            <Typography variant="h5" component="h2">We hope to see you again</Typography>
        </TransitionContainer>
    )
}

export default SuccessfulLogout;