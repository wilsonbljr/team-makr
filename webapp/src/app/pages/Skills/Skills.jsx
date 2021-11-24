import React from 'react';
import { Grid } from '@mui/material';

import StyledContainer from '../../components/StyledContainer'
import SkillsInfoCard from '../../features/SkillsInfoCard';
import HomeSkillsCard from '../../features/HomeSkillsCard';

const Skills = () => {
    return (
        <>
            <StyledContainer>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={3}>
                        <SkillsInfoCard />
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
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
            </StyledContainer>
        </>
    )
}

export default Skills;