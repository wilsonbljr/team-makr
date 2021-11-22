import React from 'react'
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { primaryColour, secondaryColour } from '../../core/utils/Variables'
import { styled } from '@mui/styles';

const Text = styled(Typography)({
    fontWeight: '300',
    textAlign: 'left',
    color: 'white',
    letterSpacing: '0.3px',
    wordWrap: 'break-word',
    marginTop: 5,
    marginBottom: 10
});

const CategoryText = styled(Typography)({
    fontWeight: '500',
    fontSize: '1.5em',
    color: 'white',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 5
});

const TeamProfileCard = (props) => {
    const openModal = () => props.setModal(true);

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    {props.name}
                </Typography>}
                avatar={<Avatar sx={{
                    bgcolor: secondaryColour,
                    color: 'black',
                    fontSize: '2em',
                    fontWeight: 500,
                    width: '75px',
                    height: '75px'
                }}>{props.name.charAt(0)}</Avatar>}
            />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <Grid container flexDirection='column'>
                    <CategoryText>Team Description: </CategoryText>
                    <Text>{props.description}</Text>
                    <CategoryText>Members: </CategoryText>
                    <Text>There are currently {props.users.length} member(s) in this team.</Text>
                    <CategoryText sx={{ pt: 3 }}>Leave team</CategoryText>
                    <Button
                        color='error'
                        variant='contained'
                        sx={{ mt: 3 }}
                        onClick={() => openModal()}> Leave Team </Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TeamProfileCard;