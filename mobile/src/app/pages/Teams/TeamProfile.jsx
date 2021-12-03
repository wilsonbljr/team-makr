import React, { useState } from 'react';
import TeamProfileEditModal from '../../components/TeamProfileEditModal';
import TeamProfileLeaveModal from '../../components/TeamProfileLeaveModal';
import DefaultView from '../../components/DefaultView';
import TeamProfileMemberList from '../../components/TeamProfileMemberList';
import TeamProfileInfoCard from '../../components/TeamProfileInfoCard';

const TeamProfile = ({ navigation }) => {
    const [editModal, setEditModal] = useState(false);
    const [leaveModal, setLeaveModal] = useState(false);

    return (
        <DefaultView>
            <TeamProfileInfoCard setLeaveModal={setLeaveModal} setEditModal={setEditModal} />
            <TeamProfileMemberList navigation={navigation} />
            <TeamProfileEditModal modal={editModal} setModal={setEditModal} />
            <TeamProfileLeaveModal modal={leaveModal} setModal={setLeaveModal} />
        </DefaultView>
    )
}

export default TeamProfile;