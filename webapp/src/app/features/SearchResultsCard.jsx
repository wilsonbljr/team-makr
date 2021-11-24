import React from 'react'
import { Card, CardContent, CardHeader, Divider, List, Typography } from '@mui/material';

import SearchResultsList from '../components/SearchResultsList';

import { primaryColour } from '../../core/utils/Variables';

const SearchResultsCard = (props) => {

    return (
        <Card sx={{ width: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5, pr: 3 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500'}}>
                    Results
                </Typography>}
            />
            <CardContent>
                <List sx={{ alignItems: 'center' }}>
                    <Divider key = {2054} />
                    {props.searchResult ? props.searchResult.map((person) => (
                        <SearchResultsList key={person.id} person={person} skillFilter={props.skillFilter} />))
                        : <Typography key={2053} variant='body1' sx={{ mt: 2 }}>If you're seeing this here, either you haven't searched yet or we couldn't find anyone.</Typography>}
                </List>
            </CardContent>
        </Card >
    )
};

export default SearchResultsCard;