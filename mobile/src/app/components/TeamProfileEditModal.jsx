import React, { useEffect, useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { editTeam, getTeam } from '../../core/services/team.service';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { backgroundColour } from '../styles/styles';


const TeamProfileEditModal = ({ modal, setModal, team, setTeam }) => {
    const { token } = useAuth();
    const { showSnack } = useSnackbar();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(team.name)
        setDescription(team.description)
    }, [team]);

    const submitEdit = () => {
        if (name !== '' && description !== '') {
            editTeam(team.id, { name, description }, token).then(async res => {
                if (res === 200) {
                    await getTeam(team.id, setTeam, token);
                    showSnack(false, 'Team updated!')
                    setModal(false);
                }
            }).catch(err => {
                console.log(err)
                showSnack(true, 'Internal server error.');
            });
        }
    };

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
            <DefaultButtonOutlined buttonLabel='EDIT TEAM' icon='pencil' onPress={() => submitEdit()} />
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