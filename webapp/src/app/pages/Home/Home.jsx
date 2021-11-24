import React, { useState } from 'react';
import { useTeams } from '../../../core/hooks/useTeams';
import { useSkills } from '../../../core/hooks/useSkills';
import { Grid } from '@mui/material';

import StyledContainer from '../../components/StyledContainer';
import HomeProfileCard from '../../components/HomeProfileCard';
import HomeTeamsCard from '../../features/HomeTeamsCard';
import HomeSkillsCard from '../../features/HomeSkillsCard';
import HomeEditProfileModal from '../../features/HomeEditProfileModal';

const Home = () => {
    const { teams } = useTeams();
    const { skills } = useSkills();
    const [modal, setModal] = useState(false);


    return (
        <StyledContainer>
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
                            <HomeTeamsCard />
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
            <HomeEditProfileModal modal={modal} setModal={setModal}/>
        </StyledContainer>
    )
}


export default Home;