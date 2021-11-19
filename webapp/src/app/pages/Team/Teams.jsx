import React, { useEffect, useState } from 'react';
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material';
import styled from 'styled-components';
import { getTeam, leaveTeam } from '../../../core/services/team.service';
import { useNavigate, useParams } from 'react-router';
import { useAuth } from '../../../auth/AuthContext';
import TeamMemberCard from '../../components/TeamMemberCard';

const Title = styled(Typography)`
    text-align: left;
    font-weight: 900;
    font-size: 1.75em;
`

const Teams = () => {
    const [team, setTeam] = useState({ id: null, name: '', description: '', users: [] })
    const { user, token } = useAuth();
    const { id } = useParams();
    const [alert, setAlert] = useState(false);
    const [snack, setSnack] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        getTeam(id, setTeam, token);
    }, [])

    const handleLeave = async event => {
        event.preventDefault();
        await leaveTeam(team.id, user, team.users, token)
            .then(res => {
                if (res.status === 200) {
                    setSnack(true);
                    setTimeout(() => {
                        navigate('/home');
                    }, 2500)
                }
            }).catch(err => {
                console.log(err)
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 3000);
            });
    }

    const closeSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnack(false)
    }

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
                    onClick={event => handleLeave(event)}> Leave Team </Button>
            </Grid>
            <Grid>
                <Typography sx={{ fontSize: '1.3em', fontWeight: 900 }}>Members</Typography>
                {team.users.map(user => {
                    return (
                        <TeamMemberCard id={user.id} firstName={user.firstName} lastName={user.lastName} leader={user.leader} />
                    )
                })}
            </Grid>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Team deleted!
                </Alert>
            </Snackbar>
        </Grid>
    )
}

export default Teams