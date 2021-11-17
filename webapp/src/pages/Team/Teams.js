import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import Container from '../../components/Container'
import styled from 'styled-components';
import { getTeam } from '../../services/team';
import { useParams } from 'react-router';

const Title = styled(Typography)`
    text-align: left;
    font-weight: 900;
    font-size: 1.75em;
`

const Teams = () => {
    const [team, setTeam] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getTeam(id, setTeam);
    }, [])

    return (
        <Container>
            <Title>{team.name}</Title>
            <p>{team.description}</p> 
        </Container>
    )
}

export default Teams