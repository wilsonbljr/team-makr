import React, { useState } from 'react';
import DefaultView from '../../components/DefaultView';
import TeamProfileMemberList from '../../components/TeamProfileMemberList';
import TeamProfileInfoCard from '../../features/TeamProfileInfoCard';
import TeamProfileLeaveModal from '../../features/TeamProfileLeaveModal';

const TeamProfile = () => {
    const [modal, setModal] = useState(false);

    return (
        <DefaultView>
            <TeamProfileInfoCard setModal={setModal} />
            <TeamProfileMemberList />
            <TeamProfileLeaveModal modal={modal} setModal={setModal} />
        </DefaultView>
    )
}

export default TeamProfile;