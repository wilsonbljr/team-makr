import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { getTeam } from '../../../core/services/team.service';
import { useParams } from 'react-router';
import { useAuth } from '../../../auth/AuthContext';
import TeamMemberCard from '../../features/TeamMemberCard';
import ConfirmTeamDeleteModal from '../../components/ConfirmTeamDeleteModal';
import Container from '../../components/Container'
import TeamProfileCard from '../../components/TeamProfileCard';

const Teams = () => {
    const { token } = useAuth();
    const { id } = useParams();
    const [team, setTeam] = useState({ id: null, name: '', description: '', users: [] })
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getTeam(id, setTeam, token);
    }, [id, token])

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <TeamProfileCard name={team.name} description={team.description} users={team.users} setModal={setModal} />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <TeamMemberCard team={team} />
                </Grid>
            </Grid>
            <ConfirmTeamDeleteModal modal={modal} setModal={setModal} team={team} />
        </Container>
    )
}

export default Teams