import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../auth/AuthContext';
import { getTeam } from '../../../core/services/team.service';
import TeamProfileEditModal from '../../components/TeamProfileEditModal';
import TeamProfileLeaveModal from '../../components/TeamProfileLeaveModal';
import DefaultView from '../../components/DefaultView';
import TeamProfileMemberList from '../../components/TeamProfileMemberList';
import TeamProfileInfoCard from '../../components/TeamProfileInfoCard';

const TeamProfile = ({ route }) => {
    const { token } = useAuth();
    const [team, setTeam] = useState({ id: null, name: '', description: '', users: [] })
    const [editModal, setEditModal] = useState(false);
    const [leaveModal, setLeaveModal] = useState(false);
    const { id } = route.params;

    useEffect(() => {
        getTeam(id, setTeam, token);
    }, [id, token])

    return (
        <DefaultView>
            <TeamProfileInfoCard team={team} setLeaveModal={setLeaveModal} setEditModal={setEditModal} />
            <TeamProfileMemberList team={team} />
            <TeamProfileEditModal setTeam={setTeam} team={team} modal={editModal} setModal={setEditModal} />
            <TeamProfileLeaveModal team={team} modal={leaveModal} setModal={setLeaveModal} />
        </DefaultView>
    )
}

export default TeamProfile;