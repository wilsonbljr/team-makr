import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { backgroundColour } from '../styles/styles';

const TeamsCreateModal = ({ modal, setModal }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <DefaultModal setModal={setModal} modal={modal} title='Create new Team'>
            <TextInput
                style={styles.input}
                label='Team name*'
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
            <DefaultButtonOutlined buttonLabel='CREATE' />
        </DefaultModal>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 8,
        backgroundColor: backgroundColour
    }
})

export default TeamsCreateModal;