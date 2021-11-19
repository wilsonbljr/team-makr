import React, { useState } from 'react'
import styled from 'styled-components';
import { Box } from '@mui/system';
import { Alert, Modal, Snackbar, Typography, IconButton } from '@mui/material';
import TeamForm from '../components/TeamForm';
import { primaryColour } from '../../core/utils/Variables';
import { Close } from '@mui/icons-material';

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

const TeamModal = (props) => {
    const [snack, setSnack] = useState(false);
    const closeModal = () => props.setModal(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);

    return (
        <>
            <Modal open={props.modal} onClose={closeModal}>
                <ModalContent sx={{ boxShadow: 24, padding: 2 }}>
                    <Typography variant='h6' sx={{ mb: 2, textAlign: 'center', color: 'black' }}>CREATE TEAM</Typography>
                    <IconButton aria-label="Close Modal" sx={{ position: 'absolute', top: '3px', right: '3px' }} onClick={() => closeModal()}>
                        <Close color='secondary' />
                    </IconButton>
                    <TeamForm closeModal={closeModal} openSnack={openSnack} setTeams={props.setTeams} />
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

export default TeamModal;