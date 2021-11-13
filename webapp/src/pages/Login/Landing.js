import React from 'react';
import styled from 'styled-components';
import desktop from '../../assets/images/desktop.svg'
import mobile from '../../assets/images/mobile.svg'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Container from '../../components/Container'


const MobileImg = styled.img`
    max-width: 100%;
`

const DesktopImg = styled.img`
    display: none;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 1.75em;
    text-align: center;
`

const Text = styled.p`
    font-weight: 400;
    font-size: 1.1em;
    text-align: center;
`

const Landing = () => {
    return (
        <Container>
            <MobileImg src={mobile} alt="Desenvolvedor" />
            <DesktopImg src={desktop} alt="Time" />
            <Title>Find the perfect team</Title>
            <Text>Building your project is way easier with the right people</Text>
            <Button component={Link} to="/login" variant="contained">Get Started</Button>
        </Container>
    )
}

export default Landing;



