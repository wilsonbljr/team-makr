import React, { useState } from 'react';
import DefaultView from '../../components/DefaultView';
import UserProfileCard from '../../components/UserProfileCard';
import SkillsCard from '../../components/SkillsCard';
import UserProfileAddToTeamModal from '../../components/UserProfileAddToTeamModal';

const UserProfile = () => {
    const [modal, setModal] = useState(false);

    return (
        <DefaultView>
            <UserProfileCard setModal={setModal} />
            <SkillsCard softSkill={0} />
            <SkillsCard softSkill={1} />
            <UserProfileAddToTeamModal setModal={setModal} modal={modal} />
        </DefaultView>
    )
}

export default UserProfile;