import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Rating, Tooltip, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import styled from 'styled-components';
import Container from '../../components/Container'
import { getUser, getUserSkills, getUserTeams } from '../../services/user';
import { Link } from 'react-router-dom';
import { primaryColour } from '../../components/UI/Variables';
import { skillLabel, skillTooltip } from '../../assets/Lists';

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
                    <CardHeader sx={{ background: primaryColour, padding: '5px' }}></CardHeader>
                    <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                        <Grid container>
                            <Grid item xs={5} sx={{ textAlign: 'right', pr: 1 }} >
                                <CategoryText sx={{ mt: 1 }}>Skill Name: </CategoryText>
                            </Grid>
                            <Grid item xs={7} >
                                <Text sx={{ mt: 1 }} >{skill.name}</Text>
                            </Grid>
                            <Grid item xs={6}>
                                <Rating sx={{ mt: 1, mb: 1 }} name='skill-level' value={skill.level} readOnly />
                            </Grid>
                            <Grid item xs={6}>
                                <Tooltip disableFocusListener title={<Typography sx={{ textAlign: 'justify' }} variant='body2'>{skillTooltip[skill.level]}</Typography>}>
                                    <Typography sx={{ mt: 1, mb: 1, fontWeight: 900 }} variant='body1'>{skillLabel[skill.level]}</Typography>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </CardContent>
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
                        <Card sx={{ width: "290px" }} key={index}>
                            <CardHeader sx={{ background: primaryColour, padding: '5px' }}></CardHeader>
                            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <Grid container alignItems='stretch'>
                                    <Grid item xs={5} sx={{ textAlign: 'right', pr: 1 }} >
                                        <CategoryText sx={{ mt: 2 }}>Team Name: </CategoryText>
                                    </Grid>
                                    <Grid item xs={7} >
                                        <Text sx={{ mt: 2 }} >{team.t_name}</Text>
                                    </Grid>
                                    <Grid item xs={5} sx={{ textAlign: 'right', pr: 1 }} >
                                        <CategoryText sx={{ mt: 1, mb: 2 }}>Description: </CategoryText>

                                    </Grid>
                                    <Grid item xs={7} >
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