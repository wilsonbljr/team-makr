import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button, Grid, Typography } from '@mui/material';
import Container from '../../components/Container'
import { getUserTeams } from '../../../core/services/team.service';
import { useAuth } from '../../../auth/AuthContext';
import TeamCard from '../../components/TeamCard';
import TeamModal from '../../features/TeamModal';

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
        <>
            <TeamsContainer>
                <Grid container sx={{ maxWidth: '400px' }} justifyContent='space-between'>
                    <Title>Teams</Title>
                    <Button sx={{ maxWidth: '190px', pt: 1, pb: 1, pr: 2, pl: 2 }} variant='outlined' onClick={openModal}>Create Team</Button>
                </Grid>
                <Grid container alignItems='center' justifyContent='space-around' gap='10px' sx={{ mt: 3 }}>
                    {teams.map((team, index) => (
                        <TeamCard id={team.id} name={team.name} description={team.description} navigate={navigate} />
                    ))}
                </Grid>
            </TeamsContainer>
            <TeamModal modal={modal} setModal={setModal} setTeams={setTeams} />
        </>
    )
}

export default TeamsUser