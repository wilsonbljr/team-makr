import React, { useState } from 'react'
import styled from 'styled-components';
import { Box } from '@mui/system';
import { Alert, Modal, Snackbar, Typography, IconButton, Button, Grid } from '@mui/material';
import { primaryColour } from '../../core/utils/Variables';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/AuthContext';
import { leaveTeam } from '../../core/services/team.service';

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

const ConfirmDeleteModal = (props) => {
    const [snack, setSnack] = useState(false);
    const closeModal = () => props.setModal(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);
    const navigate = useNavigate();
    const { user, token } = useAuth();

    const handleDelete = async event => {
        event.preventDefault();
        await leaveTeam(props.team.id, user, props.team.users, token)
            .then(res => {
                if (res.status === 200) {
                    openSnack();
                    closeModal();
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
    console.log(props)
    return (
        <>
            <Modal open={props.modal} onClose={closeModal}>
                <ModalContent sx={{ boxShadow: 24, padding: 2 }}>
                    <Grid container justifyContent='center' alignItems='center'>
                        <Typography variant='h6' sx={{ mb: 2, textAlign: 'center', color: 'black' }}>LEAVE TEAM</Typography>
                        <IconButton aria-label="Close Modal" sx={{ position: 'absolute', top: '3px', right: '3px' }} onClick={() => closeModal()}>
                            <Close color='secondary' />
                        </IconButton>
                        <Typography variant='body1' sx={{ color: 'black', textAlign: 'center' }}>If you are the leader of this team, the team will be deleted</Typography>
                        <Button onClick={event => handleDelete(event)} variant='contained' color='error' sx={{ mt: 2 }}>CONFIRM</Button>
                    </Grid>
                </ModalContent>
            </Modal>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Team deleted!
                </Alert>
            </Snackbar>
        </>
    )
}

export default ConfirmDeleteModal;