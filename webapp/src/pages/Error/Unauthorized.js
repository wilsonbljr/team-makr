import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import unauthImg from '../../assets/images/401.svg'
import { Typography } from '@mui/material';
import TransitionContainer from '../../components/TransitionContainer';
import TransitionImage from '../../components/TransitionImage';


const Unauthorized = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/login'), 5000)
    })
    return (
        <TransitionContainer>
            <TransitionImage src={unauthImg} />
            <Typography sx={{ mt: 2, fontWeight: 700 }} variant="h4" component="h1">Unauthorized</Typography>
            <Typography variant="h5" component="h2">Redirecting to login</Typography>
        </TransitionContainer>
    )
}

export default Unauthorized;