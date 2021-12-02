import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DefaultButton from '../components/DefaultButton';
import DefaultModal from '../components/DefaultModal'
import { deleteButtonColour } from '../styles/styles';

const TeamProfileLeaveModal = ({ modal, setModal }) => {
    
    return (
        <DefaultModal setModal={setModal} modal={modal} title='LEAVE TEAM'>
            <Text style={styles.text}>If you are the leader of this team, the team will be DELETED</Text>
            <DefaultButton buttonLabel='CONFIRM' color={deleteButtonColour} style={styles.button}/>
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