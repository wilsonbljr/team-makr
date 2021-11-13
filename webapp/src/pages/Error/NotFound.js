import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import notFoundImg from '../../assets/images/404.svg'
import { Typography } from '@mui/material'
import TransitionContainer from '../../components/TransitionContainer'
import TransitionImage from '../../components/TransitionImage'


const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/home'), 5000)
    })
    return (
        <TransitionContainer>
            <TransitionImage src={notFoundImg} />
            <Typography sx={{ mt: 2, fontWeight: 700 }} variant="h4" component="h1">Page not found</Typography>
            <Typography variant="h5" component="h2">Redirecting to your profile</Typography>
        </TransitionContainer>
    )
}

export default NotFound;