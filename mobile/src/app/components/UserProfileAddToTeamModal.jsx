import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import DefaultModal from './DefaultModal';
import { textColour } from '../styles/styles';
import { teams } from '../../../mock';

const UserProfileAddToTeamModal = ({ modal, setModal }) => {
    const [addTeam, setAddTeam] = useState(null);

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
            <DefaultButtonOutlined buttonLabel='ADD' />
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