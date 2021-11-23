import React, { useState } from 'react';
import { useTeams } from '../../../core/hooks/useTeams';
import { useSkills } from '../../../core/hooks/useSkills';

import { Grid } from '@mui/material';
import Container from '../../components/Container'
import HomeProfileCard from '../../components/HomeProfileCard';
import HomeTeamCard from '../../features/HomeTeamCard';
import HomeSkillsCard from '../../features/HomeSkillsCard';
import EditProfileModal from '../../features/EditProfileModal';

const Home = () => {
    const { teams } = useTeams();
    const { skills } = useSkills();
    const [modal, setModal] = useState(false);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <HomeProfileCard
                        teamNumber={teams.length}
                        skillNumber={skills.length}
                        setModal={setModal}
                    />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container flexDirection='column' spacing={2}>
                        <Grid item xs={12}>
                            <HomeTeamCard />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <HomeSkillsCard softSkill={0} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <HomeSkillsCard softSkill={1} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <EditProfileModal modal={modal} setModal={setModal}/>
        </Container>
    )
}


export default Home;