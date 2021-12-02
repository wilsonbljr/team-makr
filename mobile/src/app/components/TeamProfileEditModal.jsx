import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { backgroundColour } from '../styles/styles';
import { team } from '../../../mock';


const TeamProfileEditModal = ({ modal, setModal }) => {
    const [name, setName] = useState(team.name);
    const [description, setDescription] = useState(team.description);

    return (
        <DefaultModal setModal={setModal} modal={modal} title='EDIT TEAM'>
            <TextInput
                style={styles.input}
                label='Name*'
                mode='outlined'
                value={name}
                textContentType={'name'}
                onChangeText={name => setName(name)}
            />
            <TextInput
                style={styles.input}
                label='Description*'
                mode='outlined'
                value={description}
                onChangeText={description => setDescription(description)}
            />
            <DefaultButtonOutlined buttonLabel='EDIT TEAM' icon='pencil' />
        </DefaultModal>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 8,
        backgroundColor: backgroundColour
    }
})

export default TeamProfileEditModal;