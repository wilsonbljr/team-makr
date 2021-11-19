import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';
import styled from 'styled-components';

import Container from '../../components/Container'
import { getUser } from '../../../core/services/user.service';
import { getUserSkills } from '../../../core/services/skill.service'
import { getUserTeams } from '../../../core/services/team.service'
import { useAuth } from '../../../auth/AuthContext';
import HomeSkillCard from '../../components/HomeSkillCard';
import TeamCard from '../../components/TeamCard';
import HomeProfileCard from '../../components/HomeProfileCard';

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

function skillsMap(skills, soft) {
    // Checks if there is a skill
    const array = skills.find(skill => skill.softSkill !== soft);
    if (array === 0 || array === undefined) {
        // If there isn't returns a message instead of the card
        return <Typography variant='body1'>You haven't added any skills yet</Typography>
    } else {
        return skills.map((skill) => {
            if (skill.softSkill !== soft && skill.id !== null) {
                return (
                    <HomeSkillCard id={skill.id} level={skill.level} name={skill.name} />
                )
            }
        })
    }
}

const Home = () => {

    const [userInfo, setUserInfo] = useState([]);
    const [teams, setTeams] = useState([]);
    const [skills, setSkills] = useState([]);
    const { user, token } = useAuth();

    useEffect(() => {
        getUser(user, setUserInfo, token);
        getUserTeams(user, setTeams, token);
        getUserSkills(user, setSkills, token);
    }, [])


    return (
        <Container>
            <Grid container flexDirection='column' alignItems='center'>
                <Welcome sx={{ mt: 2, mb: 2 }}>Welcome {userInfo.firstName} {userInfo.lastName}</Welcome>
                <HomeProfileCard email={userInfo.email} pronoun={userInfo.pronoun} phone_number={userInfo.phone_number} />
            </Grid>
            <Grid container flexDirection='column' alignItems='center'>
                <Title>Teams</Title>
                <Grid container alignItems='center' justifyContent='space-around' gap='10px'>
                    {teams.length !== 0 ? teams.map((team) => (
                        <TeamCard name={team.name} id={team.id} description={team.description} />
                    ))
                    : <Typography variant='body1'>You haven't joined any teams yet</Typography>}
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