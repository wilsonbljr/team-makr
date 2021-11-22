import React from 'react';
import { Grid } from '@mui/material';
import Container from '../../components/Container'
import SkillsProfileCard from '../../components/SkillsProfileCard';
import HomeSkillsCard from '../../features/HomeSkillsCard';

const Skills = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={3}>
                        <SkillsProfileCard />
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
            </Container>
        </>
    )
}

export default Skills;