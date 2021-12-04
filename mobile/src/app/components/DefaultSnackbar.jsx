import React from 'react';
import { StyleSheet } from 'react-native';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { Snackbar } from 'react-native-paper';
import { deleteButtonColour, successColour } from '../styles/styles';

const DefaultSnackbar = () => {
    const { closeSnack, snackSuccess, snackSuccessMessage, snackError, snackErrorMessage } = useSnackbar();

    return (
        <>
            <Snackbar
                visible={snackError}
                onDismiss={() => closeSnack(true)}
                duration={3000}
                style={styles.snackError}
                wrapperStyle={styles.container}
            >
                {snackErrorMessage}
            </Snackbar>
            <Snackbar
                visible={snackSuccess}
                onDismiss={() => closeSnack(false)}
                duration={2500}
                style={styles.snackSuccess}
                wrapperStyle={styles.container}
            >
                {snackSuccessMessage}
            </Snackbar>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        top: 0
    },
    snackError: {
        backgroundColor: deleteButtonColour,
    },
    snackSuccess: {
        backgroundColor: successColour,
    }
});

export default DefaultSnackbar;