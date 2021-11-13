import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import internalImg from '../../assets/images/500.svg'
import { Typography } from '@mui/material'
import TransitionContainer from '../../components/TransitionContainer'
import TransitionImage from '../../components/TransitionImage'


const InternalServer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 5000)
    })
    return (
        <TransitionContainer>
            <TransitionImage src={internalImg} />
            <Typography sx={{ mt: 2, fontWeight: 700 }} variant="h4" component="h1">Internal Server Error</Typography>
            <Typography variant="h5" component="h2">Please, try again</Typography>
        </TransitionContainer>
    )
}

export default InternalServer;