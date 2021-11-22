import React from 'react';
import { Grid } from '@mui/material';
import Container from '../../components/Container'
import HomeSkillsCard from '../../features/HomeSkillsCard';
import SearchInputCard from '../../components/SearchInputCard';

const Search = () => {
    return (
        <>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <SearchInputCard />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <HomeSkillsCard softSkill={0} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </>
    )
}

export default Search;