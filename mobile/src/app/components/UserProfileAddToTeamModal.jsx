import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { useTeams } from '../../core/hooks/useTeams';
import { addUserToTeam } from '../../core/services/team.service';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { textColour } from '../styles/styles';

const UserProfileAddToTeamModal = ({ modal, setModal, user }) => {
    const { token } = useAuth();
    const { showSnack } = useSnackbar();
    const { teams } = useTeams();
    const [addTeam, setAddTeam] = useState(null);

    const submitAddToTeam = async () => {
        await addUserToTeam(user.id, addTeam, token).then((status) => {
            if (status === 201) {
                setModal(false);
                showSnack(false, 'User added to team!')
            };

            if (status === 'Request failed with status code 400') {
                setModal(false);
                showSnack(true, 'User already in team!');
            };
        }).catch(err => showSnack(true, 'Internal Server error.'))
    };

    return (
        <DefaultModal setModal={setModal} modal={modal} title='Add user to team'>
            <RNPickerSelect
                onValueChange={value => setAddTeam(value)}
                items={teams.map(team => { return { label: team.name, value: team.id } })}
                placeholder={{ label: 'Select a team', value: null }}
                value={addTeam}
                style={{ ...styles }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                    return <IconButton icon='menu-down' color={textColour} />
                }}
            />
            <DefaultButtonOutlined buttonLabel='ADD' onPress={() => submitAddToTeam()} />
        </DefaultModal>
    )
};

const styles = StyleSheet.create({
    inputIOS: {
        marginTop: 10,
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: textColour,
        borderRadius: 4,
        color: textColour,
        paddingRight: 30,
    },
    inputAndroid: {
        marginTop: 10,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.8,
        borderColor: textColour,
        borderRadius: 5,
        color: textColour,
        paddingRight: 30,
    },
});

export default UserProfileAddToTeamModal;