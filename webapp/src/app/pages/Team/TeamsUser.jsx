import React, { useState } from 'react';
import Container from '../../components/Container'
import TeamModal from '../../features/TeamModal';
import HomeTeamCard from '../../features/HomeTeamCard';


const TeamsUser = () => {
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);

    return (
        <Container>
            <HomeTeamCard openModal={openModal}/>
            <TeamModal modal={modal} setModal={setModal} />
        </Container>
    )
}

export default TeamsUser;