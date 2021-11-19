import React, { useEffect, useState } from 'react';
import { Alert, Button, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { getTeam } from '../../../core/services/team.service';
import { useParams } from 'react-router';
import { useAuth } from '../../../auth/AuthContext';
import TeamMemberCard from '../../components/TeamMemberCard';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';

const Title = styled(Typography)`
    text-align: left;
    font-weight: 900;
    font-size: 1.75em;
`

const Teams = () => {
    const { token } = useAuth();
    const { id } = useParams();
    const [team, setTeam] = useState({ id: null, name: '', description: '', users: [] })
    const [alert, setAlert] = useState(false);
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);

    useEffect(() => {
        getTeam(id, setTeam, token);
    }, [])

    return (
        <Grid sx={{ p: 2 }}>
            <Grid container flexDirection='column' alignItems='left' >
                <Title>{team.name}</Title>
                <p>{team.description}</p>
                {alert ? <Alert severity="error">Server error, try again</Alert> : <> </>}
                <Button
                    color='error'
                    variant='contained'
                    sx={{ maxWidth: '150px' }}
                    onClick={() => openModal()}> Leave Team </Button>
            </Grid>
            <Grid>
                <Typography sx={{ fontSize: '1.3em', fontWeight: 900 }}>Members</Typography>
                {team.users.map(user => {
                    return (
                        <TeamMemberCard id={user.id} firstName={user.firstName} lastName={user.lastName} leader={user.leader} />
                    )
                })}
            </Grid>
            <ConfirmDeleteModal modal={modal} setModal={setModal} setAlert={setAlert} team={team} />
        </Grid>
    )
}

export default Teams