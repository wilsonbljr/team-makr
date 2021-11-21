import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button, Grid, Typography } from '@mui/material';
import Container from '../../components/Container'
import { getUserTeams } from '../../../core/services/team.service';
import { useAuth } from '../../../auth/AuthContext';
import TeamModal from '../../features/TeamModal';
import TeamList from '../../components/TeamList';
import HomeTeamCard from '../../features/HomeTeamCard';

const TeamsContainer = styled(Container)`
    justify-content: flex-start;
`

const Title = styled(Typography)`
    text-align: left;
    font-weight: 900;
    font-size: 1.75em;
`

const TeamsUser = () => {
    const [teams, setTeams] = useState([]);
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);
    const { user, token } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        getUserTeams(user, setTeams, token);
    }, [])

    return (
        <Container>
            <HomeTeamCard openModal={openModal}/>
            <TeamModal modal={modal} setModal={setModal} setTeams={setTeams} />
        </Container>
    )
}

export default TeamsUser;