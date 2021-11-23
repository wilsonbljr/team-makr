import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Container from '../../components/Container'
import SearchInputCard from '../../features/SearchInputCard';
import { searchUsers } from '../../../core/services/user.service';
import { useAuth } from '../../../auth/AuthContext';
import SearchResultsCard from '../../features/SearchResultsCard';

const Search = () => {
    const { token } = useAuth();
    const [nameFilter, setNameFilter] = useState('');
    const [skillFilter, setSkillFilter] = useState([]);
    const [resultSkillFilter, setResultSkillFilter] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [alert, setAlert] = useState(false);

    async function search(event) {
        event.preventDefault();
        const splitName = nameFilter.split(' ', 2);
        let firstName = splitName[0];
        let lastName = splitName[1];
        await searchUsers(firstName, lastName, skillFilter, token)
            .then(res => {
                setSearchResult(res);
            })
            .catch(err => setAlert(true));
        setResultSkillFilter(skillFilter);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <SearchInputCard
                        search={search}
                        nameFilter={nameFilter}
                        setNameFilter={setNameFilter}
                        skillFilter={skillFilter}
                        setSkillFilter={setSkillFilter}
                        alert={alert} />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <SearchResultsCard searchResult={searchResult} skillFilter={resultSkillFilter} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Search;