import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useTeams } from '../../core/hooks/useTeams';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { createTeam } from '../../core/services/team.service';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { backgroundColour, deleteButtonColour, successColour } from '../styles/styles';

const TeamsCreateModal = ({ modal, setModal }) => {
    const { user, token } = useAuth();
    const { setCurrentUserTeams } = useTeams();
    const { showSnack } = useSnackbar();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const submitTeamCreation = () => {
        if (name !== '' && description !== '') {
            createTeam(name, description, user, token).then((status) => {
                if (status === 201) {
                    showSnack(false, 'Team created!');
                    setCurrentUserTeams(user, token);
                    setTimeout(() => setModal(false), 1500)
                } else {
                    showSnack(true, 'Internal server error.');
                }
            })
        }
    }

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
            <DefaultButtonOutlined buttonLabel='CREATE' onPress={() => submitTeamCreation()} />
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