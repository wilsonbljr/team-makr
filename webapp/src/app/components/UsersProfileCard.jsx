import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { primaryColour, secondaryColour } from '../../core/utils/Variables'
import { Add } from '@mui/icons-material';
import transformNumber from '../../core/utils/TransformNumber';
import { CardCategoryText, CardText } from './CardText';

const UsersProfileCard = (props) => {

    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    {props.user.firstName}
                </Typography>}
                avatar={<Avatar sx={{
                    bgcolor: secondaryColour,
                    color: 'black',
                    fontSize: '2em',
                    fontWeight: 500,
                    width: '75px',
                    height: '75px'
                }}>{props.user.firstName.charAt(0)}</Avatar>}
            />
            <Divider />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <Grid container flexDirection='column'>
                    <CardCategoryText>Pronouns: </CardCategoryText>
                    <CardText>{props.user.pronoun}</CardText>
                    <CardCategoryText>Email: </CardCategoryText>
                    <CardText>{props.user.email}</CardText>
                    <CardCategoryText>Phone: </CardCategoryText>
                    <CardText>{transformNumber(props.user.phone_number)}</CardText>
                    <Button
                        startIcon={<Add />}
                        variant='contained'
                        sx={{ width: '100%', mt: 5 }}
                        onClick={() => { props.setModal(true) }}
                        color='success'>Add to team</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default UsersProfileCard;