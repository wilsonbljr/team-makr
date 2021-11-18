import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from 'mui-image'
import { Button } from '@mui/material';

import mobile from '../../../assets/mobile.svg'
import desktop from '../../../assets/desktop.svg'
import Container from '../../components/Container'


const MobileImg = styled(Image)`
    max-width: 100%;
`

const DesktopImg = styled(Image)`
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
            <Button component={Link} to="/login" >Get Started</Button>
        </Container>
    )
}

export default Landing;



