import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../../auth/AuthContext';
import { getTeam } from '../../../core/services/team.service';
import { Grid } from '@mui/material';

import StyledContainer from '../../components/StyledContainer';
import TeamProfileInfoCard from '../../components/TeamProfileInfoCard';
import TeamProfileDeleteModal from '../../components/TeamProfileDeleteModal';
import TeamProfileMemberCard from '../../features/TeamProfileMemberCard';
import TeamProfileEditModal from '../../features/TeamProfileEditModal';

const TeamProfile = () => {
    const { token } = useAuth();
    const { id } = useParams();
    const [team, setTeam] = useState({ id: null, name: '', description: '', users: [] })
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    useEffect(() => {
        getTeam(id, setTeam, token);
    }, [id, token])

    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <TeamProfileInfoCard team={team} setDeleteModal={setDeleteModal} setEditModal={setEditModal} />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <TeamProfileMemberCard team={team} />
                </Grid>
            </Grid>
            <TeamProfileDeleteModal modal={deleteModal} setModal={setDeleteModal} team={team} />
            <TeamProfileEditModal modal={editModal} setModal={setEditModal} team={team} setTeam={setTeam}/>
        </StyledContainer>
    )
}

export default TeamProfile;