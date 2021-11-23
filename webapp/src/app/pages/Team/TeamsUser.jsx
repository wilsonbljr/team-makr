import React, { useState } from 'react';
import Container from '../../components/Container'
import TeamModal from '../../features/TeamModal';
import HomeTeamCard from '../../features/HomeTeamCard';
import { Box } from '@mui/system';


const TeamsUser = () => {
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);

    return (
        <Container>
            <Box sx={{maxWidth: '1540px', minWidth: { lg: '1000px'}}}>
                <HomeTeamCard openModal={openModal} />
                <TeamModal modal={modal} setModal={setModal} />
            </Box>
        </Container>
    )
}

export default TeamsUser;