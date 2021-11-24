import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../../auth/AuthContext';
import { getTeam } from '../../../core/services/team.service';
import { Grid } from '@mui/material';

import StyledContainer from '../../components/StyledContainer';
import TeamInfoCard from '../../components/TeamInfoCard';
import TeamProfileDeleteModal from '../../components/TeamProfileDeleteModal';
import TeamProfileMemberCard from '../../features/TeamProfileMemberCard';

const TeamProfile = () => {
    const { token } = useAuth();
    const { id } = useParams();
    const [team, setTeam] = useState({ id: null, name: '', description: '', users: [] })
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getTeam(id, setTeam, token);
    }, [id, token])

    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <TeamInfoCard name={team.name} description={team.description} users={team.users} setModal={setModal} />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <TeamProfileMemberCard team={team} />
                </Grid>
            </Grid>
            <TeamProfileDeleteModal modal={modal} setModal={setModal} team={team} />
        </StyledContainer>
    )
}

export default TeamProfile;