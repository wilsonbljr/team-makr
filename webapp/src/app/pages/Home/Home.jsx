import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Rating, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import styled from 'styled-components';

import Container from '../../components/Container'
import { primaryColour } from '../../../core/utils/Variables';
import { getUser } from '../../../core/services/user.service';
import { getUserSkills } from '../../../core/services/skill.service'
import { getUserTeams } from '../../../core/services/team.service'
import { skillLabel, skillTooltip } from '../../../core/utils/Lists';

const Welcome = styled(Typography)`
    text-align: center;
    font-weight: 900;
    font-size: 1.4em;
`

const Title = styled(Welcome)`
    text-align: left;
    margin-bottom: 1vh;
    margin-top: 3vh;
`

const Text = styled(Typography)`
    font-weight: 400;
    text-align: left;
    letter-spacing: 0.3px;
    word-wrap: break-word;
`

const CategoryText = styled(Typography)`
    font-weight: 700;
    text-align: right;
    letter-spacing: 0.3px;
`

function skillsMap(skills, soft) {
    return skills.map((skill) => {
        if (skill.softSkill !== soft && skill.id !== null) {
            return (
                <Card sx={{ width: "280px" }} key={skill.id}>
                    <CardHeader sx={{ background: primaryColour, padding: '10px' }} title={<Typography variant='h6' sx={{ color: 'white', fontSize: '1.2em', textAlign: 'center' }}>{skill.name}</Typography>} />
                    <Tooltip disableFocusListener placement='top' title={<Typography sx={{ textAlign: 'justify' }} variant='body2'>{skillTooltip[skill.level]}</Typography>}>
                        <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Rating sx={{ mt: 1, mb: 1, pt: 1 }} name='skill-level' value={skill.level} readOnly />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ mt: 1, mb: 1, fontWeight: 900, pb: 1, pt: 1 }} variant='body1'>{skillLabel[skill.level]}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Tooltip>
                </Card>
            )
        }
    })
}

const Home = () => {

    const [user, setUser] = useState([]);
    const [teams, setTeams] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getUser(sessionStorage.getItem('user'), setUser);
        getUserTeams(sessionStorage.getItem('user'), setTeams);
        getUserSkills(sessionStorage.getItem('user'), setSkills);
    }, [])


    return (
        <Container>
            <Grid container flexDirection='column' alignItems='center'>
                <Welcome sx={{ mt: 2, mb: 2 }}>Welcome {user.firstName} {user.lastName}</Welcome>
                <Card sx={{ width: '290px' }}>
                    <CardHeader sx={{ background: primaryColour, padding: '8px' }}></CardHeader>
                    <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                        <Grid container>
                            <Grid item xs={4} sx={{ textAlign: 'right', pr: 1 }}>
                                <CategoryText sx={{ mt: 2, mb: 2 }}>Pronouns: </CategoryText>
                                <CategoryText sx={{ mt: 2, mb: 2 }}>Email: </CategoryText>
                                <CategoryText sx={{ mt: 2, mb: 2 }}>Phone: </CategoryText>
                            </Grid>
                            <Grid item xs={8}>
                                <Text sx={{ mt: 2, mb: 2 }}>{user.pronoun}</Text>
                                <Text sx={{ mt: 2, mb: 2 }}>{user.email}</Text>
                                <Text sx={{ mt: 2, mb: 2 }}>{user.phone_number}</Text>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button endIcon={<Edit />} variant='outlined' sx={{ width: '100%' }}
                            component={Link} to='/editprofile'>Edit Profile</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid container flexDirection='column' alignItems='center'>
                <Title>Teams</Title>
                <Grid container alignItems='center' justifyContent='space-around' gap='10px'>
                    {teams.map((team, index) => (
                        <Card sx={{ width: "400px" }} key={index}>
                            <CardHeader
                                sx={{ background: primaryColour, pt: 1, pb: 1 }}
                                title={<Typography
                                    variant='h6'
                                    sx={{ color: 'white', fontSize: '1.2em', textAlign: 'center' }}>
                                    {team.t_name}
                                </Typography>}
                            />
                            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <Grid container alignItems='stretch'>
                                    <Grid item xs={4} sx={{ textAlign: 'right', pr: 1 }} >
                                        <CategoryText sx={{ mt: 1, mb: 2 }}>Description: </CategoryText>
                                    </Grid>
                                    <Grid item xs={8} >
                                        <Text sx={{ mt: 1, mb: 2 }} >{team.t_description}</Text>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Grid>
            <Grid container flexDirection='column' alignItems='center'>
                <Title>Hard Skills</Title>
                <Grid container alignItems='center' justifyContent='space-around' gap='10px'>
                    {skillsMap(skills, 1)}
                </Grid>
            </Grid>
            <Grid container flexDirection='column' alignItems='center'>
                <Title>Soft Skills</Title>
                <Grid container alignItems='center' justifyContent='space-around' gap='10px'>
                    {skillsMap(skills, 0)}
                </Grid>
            </Grid>
        </Container>
    )
}


export default Home;