import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Title, IconButton } from 'react-native-paper';
import { primaryColour } from '../styles/styles';

const DefaultModal = ({ setModal, modal, children, title }) => {
    const hideModal = () => setModal(false);

    return (
        <Portal>
            <Modal
                visible={modal}
                onDismiss={hideModal}
                contentContainerStyle={styles.container}
            >
                <Title style={styles.title}>{title}</Title>
                <IconButton icon='close' style={styles.icon} onPress={() => setModal(false)} />
                {children}
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColour,
        paddingTop: 10,
        paddingHorizontal: 25,
        paddingBottom: 25,
        margin: 20
    },
    title: {
        marginBottom: 16,
        fontFamily: 'MontserratMedium',
        textAlign: 'center',
    },
    icon: {
        position: 'absolute',
        top: 2,
        right: 2
    }
})

export default DefaultModal;