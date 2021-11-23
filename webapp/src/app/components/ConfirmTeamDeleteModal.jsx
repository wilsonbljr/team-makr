import React, { useState } from 'react'
import styled from 'styled-components';
import { Box } from '@mui/system';
import { Alert, Modal, Snackbar, Typography, IconButton, Button, Grid } from '@mui/material';
import { primaryColour } from '../../core/utils/Variables';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/AuthContext';
import { leaveTeam } from '../../core/services/team.service';
import { useTeams } from '../../core/hooks/useTeams';

const ModalContent = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: ${primaryColour};
    border: 2px solid ${primaryColour};
`

const ConfirmDeleteModal = (props) => {
    const [snack, setSnack] = useState(false);
    const closeModal = () => props.setModal(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);
    const navigate = useNavigate();
    const { user, token } = useAuth();
    const { setCurrentUserTeams } = useTeams();

    const handleDelete = async event => {
        event.preventDefault();
        await leaveTeam(props.team.id, user, props.team.users, token)
            .then(async res => {
                if (res.status === 200) {
                    openSnack();
                    closeModal();
                    await setCurrentUserTeams(user, token);
                    setTimeout(() => {
                        navigate('/home');
                    }, 2500)
                }
            }).catch(err => {
                props.setAlert(true);
                setTimeout(() => {
                    props.setAlert(false);
                }, 3000);
            });
    }
    
    return (
        <>
            <Modal open={props.modal} onClose={closeModal}>
                <ModalContent sx={{ boxShadow: 24, padding: 3 }}>
                    <Grid container justifyContent='center' alignItems='center'>
                        <Typography variant='h6' sx={{ mb: 2, textAlign: 'center' }}>LEAVE TEAM</Typography>
                        <IconButton aria-label="Close Modal" sx={{ position: 'absolute', top: '6px', right: '6px' }} onClick={() => closeModal()}>
                            <Close sx={{ color: 'white' }} />
                        </IconButton>
                        <Typography variant='body1' sx={{ textAlign: 'center' }}>If you are the leader of this team, the team will be DELETED</Typography>
                        <Button onClick={event => handleDelete(event)} variant='contained' color='error' sx={{ mt: 2, minWidth: '190px' }}>CONFIRM</Button>
                    </Grid>
                </ModalContent>
            </Modal>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Left the team!
                </Alert>
            </Snackbar>
        </>
    )
}

export default ConfirmDeleteModal;