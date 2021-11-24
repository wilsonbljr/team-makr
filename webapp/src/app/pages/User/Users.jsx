import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useAuth } from '../../../auth/AuthContext';
import { getUserSkills } from '../../../core/services/skill.service';
import { getUserProfile } from '../../../core/services/user.service';
import Container from '../../components/Container'
import UsersAddToTeamModal from '../../features/UsersAddToTeamModal';
import UsersProfileCard from '../../components/UsersProfileCard';
import UserSkillsCard from '../../features/UsersSkillsCard';

const Users = () => {
    const { token } = useAuth();
    const [userInfo, setUserInfo] = useState({ id: null, firstName: '', lastName: '', pronoun: '', email: '', phone_number: '' });
    const [userSkills, setUserSkills] = useState([]);
    const [modal, setModal] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getUserProfile(id, setUserInfo, token);
        getUserSkills(id, setUserSkills, token);
    }, [id, token])

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <UsersProfileCard
                        user={userInfo}
                        setModal={setModal}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container flexDirection='column' spacing={2}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <UserSkillsCard softSkill={0} skills={userSkills}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <UserSkillsCard softSkill={1} skills={userSkills}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <UsersAddToTeamModal modal={modal} setModal={setModal} userId={id} />
        </Container>
    )
}

export default Users;