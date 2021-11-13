import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import { Edit } from '@mui/icons-material';
import styled from 'styled-components';
import Container from '../../components/Container'
import { getUser, getUserSkills, getUserTeams } from '../../services/user';
import { Link } from 'react-router-dom';

const Welcome = styled.h1`
    text-align: center;
    font-weight: 500;
    font-size: 1.2em;
    margin-bottom: 2vh;
`

const Title = styled(Welcome)`
    text-align: left;
    margin-bottom: 1vh;
    margin-top: 3vh;
`

const Information = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    text-align: center;
`

const EditProfile = styled(Button)`
    width: 60%;
`

const ContainerInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: center;
`

const ContainerTeams = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
`

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
            <ContainerInfo>
                <Welcome>Welcome {user.firstName} {user.lastName}</Welcome>
                <Information>
                    <p> Pronouns: {user.pronoun}</p>
                    <p> Email: {user.email} </p>
                    <p> Phone: {user.phone_number}</p>
                </Information>
                <EditProfile endIcon={<Edit />} variant='outlined' sx={{ fontWeight: 700 }}
                    component={Link} to='/editprofile'>Edit Profile</EditProfile>
            </ContainerInfo>
            <ContainerInfo>
                <Title>Teams</Title>
                <ContainerTeams>
                    {teams.map((team, index) => (
                        <Card sx={{ width: "280px" }} key={index}>
                            <CardContent>{team.t_name}</CardContent>
                            <CardContent>{team.t_description}</CardContent>
                        </Card>
                    ))}
                </ContainerTeams>
            </ContainerInfo>
            <ContainerInfo>
                <Title>Soft Skills</Title>
                <ContainerTeams>
                    {skills.map((skill) => {
                        if (skill.softSkill !== 0 && skill.id !== null) {
                            return (
                                <Card sx={{ width: "280px" }} key={skill.id}>
                                    <CardContent>{skill.name}</CardContent>
                                    <CardContent>Level: {skill.level}</CardContent>
                                </Card>
                            )
                        } else {
                            return (
                                <></>
                            )
                        }
                    })}
                </ContainerTeams>
            </ContainerInfo>
            <ContainerInfo>
                <Title>Hard Skills</Title>
                <ContainerTeams>
                    {skills.map((skill) => {
                        if (skill.softSkill !== 1 && skill.id !== null) {
                            return (
                                <Card sx={{ width: "280px" }} key={skill.id}>
                                    <CardContent>{skill.name}</CardContent>
                                    <CardContent>Level: {skill.level}</CardContent>
                                </Card>
                            )
                        } else {
                            return (
                                <></>
                            )
                        }
                    })}
                </ContainerTeams>
            </ContainerInfo>
        </Container>
    )
}


export default Home;