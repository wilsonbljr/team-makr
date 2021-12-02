import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Title, IconButton } from 'react-native-paper';
import { backgroundColour, primaryColour } from '../styles/styles';

const DefaultModal = ({ setModal, modal, children, title }) => {
    const hideModal = () => setModal(false);

    return (
        <Portal>
            <Modal
                visible={modal}
                onDismiss={hideModal}
                contentContainerStyle={styles.container}
            >
                <ScrollView style={styles.scrollContainer}>
                    <Title style={styles.title}>{title}</Title>
                    <IconButton icon='close' style={styles.icon} onPress={() => setModal(false)} />
                    {children}
                </ScrollView>
            </Modal>

        </Portal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColour,
        margin: 20,
        borderWidth: 1.5,
        borderColor: primaryColour
    },
    scrollContainer: {
        width: '100%',
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 25,
    },
    title: {
        marginBottom: 16,
        fontFamily: 'MontserratMedium',
        textAlign: 'center',
    },
    icon: {
        position: 'absolute',
        top: -5,
        right: -10
    }
})

export default DefaultModal;