import React from 'react'
import { Button, Card, CardContent, CardHeader, Divider, Grid, List, Typography } from '@mui/material';
import { primaryColour } from '../../core/utils/Variables';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchResultsList from '../components/SearchResultsList';

const SearchResultsCard = (props) => {

    return (
        <Card sx={{ width: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5, pr: 3 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Results
                </Typography>}
                action={<Button endIcon={<AddBoxIcon />} variant='contained' onClick={() => console.log('oi')}>SORT BY</Button>}
            />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <List sx={{ alignItems: 'center' }}>
                    <Divider />
                    {props.searchResult ? props.searchResult.map((person) => (
                        <SearchResultsList person={person} skillFilter={props.skillFilter} />
                    ))
                        : <Typography variant='body1' sx={{ mt: 2 }}>The results of your search will appear here!</Typography>}
                </List>
            </CardContent>
        </Card >
    )
};

export default SearchResultsCard;