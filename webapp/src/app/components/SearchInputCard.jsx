import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import { primaryColour, secondaryColour } from '../../core/utils/Variables'
import { Code, Search } from '@mui/icons-material';
import { CardCategoryText, CardText } from './CardText';
import AddSkillForm from './AddSkillForm';
import RemoveSkillForm from './RemoveSkillForm';
import SearchForm from './SearchForm';

const SearchInputCard = () => {

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    Search
                </Typography>}
                avatar={<Search sx={{
                    color: secondaryColour,
                    fontSize: '2em',
                    fontWeight: 500,
                    width: '75px',
                    height: '75px'
                }} />}
            />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <Grid container flexDirection='column'>
                <Typography variant='body1' sx={{ textAlign: 'left', mb: 4, mt: 3 }}>You can search people by name, skill or both!</Typography>
                    <SearchForm />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default SearchInputCard;