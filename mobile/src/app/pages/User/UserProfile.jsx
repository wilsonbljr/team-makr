import React from 'react';
import DefaultView from '../../components/DefaultView';
import UserProfileCard from '../../components/UserProfileCard';
import SkillsCard from '../../components/SkillsCard';

const UserProfile = () => {
    return (
        <DefaultView>
            <UserProfileCard />
            <SkillsCard softSkill={0} />
            <SkillsCard softSkill={1} />
        </DefaultView>
    )
}

export default UserProfile;