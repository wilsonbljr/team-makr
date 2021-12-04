import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../auth/AuthContext';
import DefaultView from '../../components/DefaultView';
import UserProfileCard from '../../components/UserProfileCard';
import SkillsCard from '../../components/SkillsCard';
import UserProfileAddToTeamModal from '../../components/UserProfileAddToTeamModal';
import { getUserProfile } from '../../../core/services/user.service';
import { getUserSkills } from '../../../core/services/skill.service';
import { useNavigation } from '@react-navigation/core';

const UserProfile = ({ route }) => {
    const { user, token } = useAuth();
    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    const [userInfo, setUserInfo] = useState({ id: null, firstName: '', lastName: '', pronoun: '', email: '', phone_number: '' });
    const [userSkills, setUserSkills] = useState([]);
    const { id } = route.params;

    useEffect(() => {
        if (user === id) {
            navigation.navigate('Home')
        } else {
            getUserProfile(id, setUserInfo, token);
            getUserSkills(id, setUserSkills, token);
        }
    }, [id, token]);

    return (
        <DefaultView>
            <UserProfileCard user={userInfo} setModal={setModal} />
            <SkillsCard skills={userSkills} softSkill={0} />
            <SkillsCard skills={userSkills} softSkill={1} />
            <UserProfileAddToTeamModal user={userInfo} setModal={setModal} modal={modal} />
        </DefaultView>
    )
}

export default UserProfile;