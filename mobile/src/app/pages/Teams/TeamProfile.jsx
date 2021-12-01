import React from 'react';
import DefaultView from '../../components/DefaultView';
import TeamProfileMemberList from '../../components/TeamProfileMemberList';
import TeamProfileInfoCard from '../../features/TeamProfileInfoCard';

const TeamProfile = () => {
    return (
        <DefaultView>
            <TeamProfileInfoCard />
            <TeamProfileMemberList />
        </DefaultView>
    )
}

export default TeamProfile;