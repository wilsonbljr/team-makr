import React, { useState } from 'react';
import DefaultView from '../../components/DefaultView';
import TeamsCard from '../../components/TeamsCard';
import TeamsCreateModal from '../../components/TeamsCreateModal';

const Teams = ({ navigation }) => {
    const [modal, setModal] = useState(false);

    return (
        <DefaultView>
            <TeamsCard setModal={setModal} navigation={navigation} />
            <TeamsCreateModal setModal={setModal} modal={modal} />
        </DefaultView>
    )
}

export default Teams;