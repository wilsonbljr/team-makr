import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Alert, Avatar, Button, Card, CardContent, CardHeader, Grid, IconButton, Modal, Snackbar, TextField, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { Box } from '@mui/system';
import Container from '../../components/Container'
import { createTeam } from '../../../core/services/team.service';
import { getUserTeams } from '../../../core/services/team.service';
import { lightPrimaryColour, primaryColour } from '../../../core/utils/Variables';

const TeamsContainer = styled(Container)`
    justify-content: flex-start;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`

const Title = styled(Typography)`
    text-align: left;
    font-weight: 900;
    font-size: 1.75em;
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

const ModalContent = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: #FFF;
    border: 2px solid ${primaryColour};
`

function teamForm(event, name, desc, closeModal, openSnack, setTeams) {
    event.preventDefault();
    createTeam(name, desc, sessionStorage.getItem('user')).then((status) => {
        console.log(status)
        if (status === 201) {
            closeModal();
            openSnack();
            getUserTeams(sessionStorage.getItem('user'), setTeams);
        }
    })
}



const TeamsUser = () => {
    const [teams, setTeams] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [teamDesc, setTeamDesc] = useState('');
    const [modal, setModal] = useState(false);
    const [snack, setSnack] = useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);
    const navigate = useNavigate();


    useEffect(() => {
        getUserTeams(sessionStorage.getItem('user'), setTeams);
    }, [])

    return (
        <>
            <TeamsContainer>
                <Grid container sx={{ maxWidth: '400px' }} justifyContent='space-between'>
                    <Title>Teams</Title>
                    <Button sx={{ maxWidth: '165px', padding: 2 }} onClick={openModal}>Create new Team</Button>
                </Grid>
                <Grid container alignItems='center' justifyContent='space-around' gap='10px' sx={{ mt: 3 }}>
                    {teams.map((team, index) => (
                        <Card sx={{ width: "400px" }} key={index}>
                            <CardHeader
                                sx={{ background: primaryColour, pt: 1.5, pb: 1.5 }}
                                title={<Typography
                                    variant='h6'
                                    sx={{ color: 'white', fontSize: '1.2em', textAlign: 'center' }}>
                                    {team.name}
                                </Typography>}
                                action={<IconButton>
                                    <OpenInNew sx={{ filter: 'invert(100)' }} />
                                </IconButton>}
                                avatar={<Avatar sx={{ bgcolor: lightPrimaryColour }}>{team.name.charAt(0)}</Avatar>}
                            />
                            <CardContent sx={{ paddingBottom: '0px', paddingTop: '0px' }}>
                                <Grid container alignItems='stretch'>
                                    <Grid item xs={4} sx={{ textAlign: 'right', pr: 1 }} >
                                        <CategoryText sx={{ mt: 1, mb: 2 }}>Description: </CategoryText>
                                    </Grid>
                                    <Grid item xs={8} >
                                        <Text sx={{ mt: 1, mb: 2 }} >{team.description}</Text>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </TeamsContainer>
            <Modal open={modal} onClose={closeModal}>
                <ModalContent sx={{ boxShadow: 24, padding: 2 }}>
                    <Typography variant='h6' sx={{ mb: 2, textAlign: 'center' }}>CREATE TEAM</Typography>
                    <StyledForm onSubmit={event => { teamForm(event, teamName, teamDesc, closeModal, openSnack, setTeams) }}>
                        <TextField onChange={(event) => {
                            setTeamName(event.target.value);
                        }} id='name' label='Team name' variant='outlined' type="text" required />
                        <TextField onChange={(event) => {
                            setTeamDesc(event.target.value);
                        }} id='description' multiline label='Description' variant='outlined' type="text" required />
                        <Button type="submit">Create</Button>
                    </StyledForm>
                </ModalContent>
            </Modal>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Team created
                </Alert>
            </Snackbar>
        </>
    )
}

export default TeamsUser