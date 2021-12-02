import React, { useState } from 'react';
import DefaultView from '../../components/DefaultView';
import HomeProfileCard from '../../components/HomeProfileCard';
import HomeEditProfileModal from '../../components/HomeEditProfileModal';

const Home = ({ navigation }) => {
    const [modal, setModal] = useState(false);

    return (
        <DefaultView>
            <HomeProfileCard setModal={setModal} navigation={navigation} />
            <HomeEditProfileModal modal={modal} setModal={setModal} />
        </DefaultView>
    )
}

export default Home;