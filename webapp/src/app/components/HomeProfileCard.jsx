import React from 'react';
import { Link } from 'react-router-dom';
import { useTeams } from '../../core/hooks/useTeams';
import { useSkills } from '../../core/hooks/useSkills';
import { useUserInfo } from '../../core/hooks/useUserInfo';

import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { AdminPanelSettings, Code, Edit, People } from '@mui/icons-material';
import { styled } from '@mui/styles';

import transformNumber from '../../core/utils/TransformNumber';
import { primaryColour, secondaryColour } from '../../core/utils/Variables';

const Text = styled(Typography)({
    fontWeight: '300',
    textAlign: 'left',
    letterSpacing: '0.3px',
    wordWrap: 'break-word',
    marginTop: 5,
    marginBottom: 10
});

const CategoryText = styled(Typography)({
    fontWeight: '500',
    fontSize: '1.5em',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 5
});

const HomeProfileCard = (props) => {
    const { firstName, pronoun, email, phone_number, admin } = useUserInfo();
    const { skills } = useSkills();
    const { teams } = useTeams();


    return (
        <Card sx={{ width: '100%', height: '100%', background: primaryColour, p: 1, minWidth: '320px', borderRadius: 4 }}>
            <CardHeader
                sx={{ pt: 1.5, pb: 1.5 }}
                title={<Typography
                    variant='h5'
                    sx={{ textTransform: 'uppercase', fontWeight: '500' }}>
                    {firstName}
                </Typography>}
                avatar={<Avatar sx={{
                    bgcolor: secondaryColour,
                    color: 'black',
                    fontSize: '2em',
                    fontWeight: 500,
                    width: '75px',
                    height: '75px'
                }}>{firstName.charAt(0)}</Avatar>}
            />
            <Divider />
            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <Grid container flexDirection='column'>
                    <CategoryText>Pronouns: </CategoryText>
                    <Text>{pronoun}</Text>
                    <CategoryText>Email: </CategoryText>
                    <Text>{email}</Text>
                    <CategoryText>Phone: </CategoryText>
                    <Text>{transformNumber(phone_number)}</Text>
                    <Button
                        endIcon={<Edit />}
                        variant='contained'
                        sx={{ width: '100%', mb: 3 }}
                        onClick={() => props.setModal(true)}>Edit Profile</Button>
                </Grid>
            </CardContent>
            <CardContent>
                <CategoryText>Teams: </CategoryText>
                <Text>You currently are in {teams.length} teams!</Text>
                <Button
                    endIcon={<People />}
                    variant='contained'
                    sx={{ width: '100%', mb: 5 }}
                    component={Link}
                    to='/team'>Manage Teams</Button>
                <CategoryText>Skills: </CategoryText>
                <Text>You currently have {skills.length} skills!</Text>
                <Button
                    endIcon={<Code />}
                    variant='contained'
                    sx={{ width: '100%', mb: 3 }}
                    component={Link}
                    to='/skill'>Manage Skills</Button>
                {admin ? <>

                    <CategoryText>Admin: </CategoryText>
                    <Button
                        endIcon={<AdminPanelSettings />}
                        variant='contained'
                        sx={{ width: '100%', mt: 2 }}
                        component={Link}
                        to='/admin'>Admin Panel</Button> </> : <> </>}
            </CardContent>
        </Card>
    )
}

export default HomeProfileCard;