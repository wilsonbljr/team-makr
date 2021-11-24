import React, { useState } from 'react';
import { Box } from '@mui/system';

import StyledContainer from '../../components/StyledContainer';
import TeamsModal from '../../features/TeamsModal';
import HomeTeamsCard from '../../features/HomeTeamsCard';

const Teams = () => {
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);

    return (
        <StyledContainer>
            <Box sx={{maxWidth: '1540px', minWidth: { lg: '1000px'}}}>
                <HomeTeamsCard openModal={openModal} />
                <TeamsModal modal={modal} setModal={setModal} />
            </Box>
        </StyledContainer>
    )
}

export default Teams;