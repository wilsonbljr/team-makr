import React, { useState } from 'react';
import styled from 'styled-components';

import { Box } from '@mui/system';
import { Alert, Modal, Snackbar, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

import TeamProfileEditForm from '../components/TeamProfileEditForm';

import { darkerPrimaryColour, iconColor, primaryColour } from '../../core/utils/Variables';

const ModalContent = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: ${darkerPrimaryColour};
    border: 2px solid ${primaryColour};
`

const TeamProfileEditModal = (props) => {
    const [snack, setSnack] = useState(false);
    const closeModal = () => props.setModal(false);
    const closeSnack = () => setSnack(false);
    const openSnack = () => setSnack(true);

    return (
        <>
            <Modal open={props.modal} onClose={closeModal}>
                <ModalContent sx={{ boxShadow: 24, p: 3, pt: 2 }}>
                    <Typography variant='h5' sx={{ mb: 4, textAlign: 'center', fontWeight: 500 }}>Edit your team</Typography>
                    <IconButton aria-label="Close Modal" sx={{ position: 'absolute', top: '6px', right: '6px' }} onClick={() => closeModal()}>
                        <Close sx={{ color: iconColor }} />
                    </IconButton>
                    <TeamProfileEditForm closeModal={closeModal} openSnack={openSnack} team={props.team} setTeam={props.setTeam}/>
                </ModalContent>
            </Modal>
            <Snackbar open={snack} autoHideDuration={5000} onClose={closeSnack} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">
                    Team updated!
                </Alert>
            </Snackbar>
        </>
    )
}

export default TeamProfileEditModal;