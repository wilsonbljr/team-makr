import React from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useTeams } from '../../core/hooks/useTeams';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { leaveTeam } from '../../core/services/team.service';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DefaultButton from '../components/DefaultButton';
import DefaultModal from '../components/DefaultModal'
import { deleteButtonColour } from '../styles/styles';

const TeamProfileLeaveModal = ({ modal, setModal, team }) => {
    const { user, token } = useAuth();
    const { setCurrentUserTeams } = useTeams();
    const { showSnack } = useSnackbar();
    const navigation = useNavigation();

    const submitLeave = async () => {
        await leaveTeam(team.id, user, team.users, token)
            .then(async res => {
                if (res.status === 200) {
                    showSnack(false, 'Left the team!');
                    setModal(false);
                    await setCurrentUserTeams(user, token);
                    setTimeout(() => {
                        navigation.navigate('Home');
                    }, 500)
                }
            }).catch(err => {
                showSnack(true, 'Internal Server error.');
            });
    }

    return (
        <DefaultModal setModal={setModal} modal={modal} title='LEAVE TEAM'>
            <Text style={styles.text}>If you are the leader of this team, the team will be DELETED</Text>
            <DefaultButton buttonLabel='CONFIRM' color={deleteButtonColour} style={styles.button} onPress={() => submitLeave()} />
        </DefaultModal>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontFamily: 'MontserratLight',
        fontSize: 16
    },
    button: {
        width: '50%',
        alignSelf: 'center',
        marginTop: 14
    }
})

export default TeamProfileLeaveModal;