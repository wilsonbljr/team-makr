import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { forgotPasswordEmail, resetPassword } from '../../core/services/password.service';
import useValidate from '../../core/hooks/useValidate';
import { StyleSheet } from 'react-native';
import { HelperText, Snackbar, TextInput } from 'react-native-paper';
import DefaultButton from './DefaultButton';
import { deleteButtonColour, secondaryColour, successColour } from '../styles/styles';


const RecoverPasswordForm = () => {
    const { errors, handleValidation } = useValidate();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToken, setPasswordToken] = useState('');
    const [successSnack, setSuccessSnack] = useState(false);
    const [errorSnack, setErrorSnack] = useState(false);
    const [errorSnackMessage, setErrorSnackMessage] = useState('');
    const [successSnackMessage, setSuccessSnackMessage] = useState('');


    function submitRecoveryEmail() {
        handleValidation(email);
        if (!errors.email.error) {
            forgotPasswordEmail(email).then(res => {
                if (res.status === 200) {
                    setSuccessSnackMessage('E-mail sent');
                    setSuccessSnack(true);
                } else {
                    setErrorSnackMessage('E-mail not found')
                    setErrorSnack(true)
                }
            }).catch(error => {
                setErrorSnackMessage('Internal server error')
                setErrorSnack(true)
            });
        }
    };

    function submitResetPassword() {
        handleValidation(password);
        if (!errors.password.error) {
            resetPassword(email, password, passwordToken).then(res => {
                if (res === 200) {
                    setSuccessSnackMessage('Password changed!');
                    setSuccessSnack(true);
                    setTimeout(() => navigation.navigate('Login'), 3000)
                } else {
                    setErrorSnackMessage('Invalid token');
                    setErrorSnack(true);
                }
            }).catch(error => {
                setErrorSnackMessage('Internal server error')
                setErrorSnack(true)
            });
        }
    };

    return (
        <>
            <TextInput
                style={styles.emailInput}
                label='E-mail*'
                mode='outlined'
                value={email}
                onBlur={() => { handleValidation({ email }) }}
                error={errors.email.error}
                textContentType={'emailAddress'}
                onChangeText={email => setEmail(email)}
            />
            <HelperText type='error' padding='none' visible={errors.email.error}>{errors.email.errorText}</HelperText>
            <DefaultButton buttonLabel='Send Token' onPress={() => submitRecoveryEmail()} />
            <TextInput
                style={styles.tokenInput}
                label='Token*'
                mode='outlined'
                value={passwordToken}
                onChangeText={passwordToken => setPasswordToken(passwordToken)}
            />
            <TextInput
                label='New Password*'
                mode='outlined'
                value={password}
                textContentType={'password'}
                onBlur={() => { handleValidation({ password }) }}
                error={errors.password.error}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                autoCapitalize='none'
            />
            <HelperText type='error' padding='none' visible={errors.password.error}>{errors.password.errorText}</HelperText>
            <DefaultButton buttonLabel='Change Password' onPress={() => submitResetPassword()} />
            <Snackbar
                visible={errorSnack}
                onDismiss={() => setErrorSnack(false)}
                duration={3000}
                style={styles.snackError}
            >
                {errorSnackMessage}
            </Snackbar>
            <Snackbar
                visible={successSnack}
                onDismiss={() => setSuccessSnack(false)}
                duration={3000}
                style={styles.snackSuccess}
            >
                {successSnackMessage}
            </Snackbar>
        </>
    )
};

const styles = StyleSheet.create({
    emailInput: {
        marginTop: 10
    },
    tokenInput: {
        marginVertical: 16
    },
    recoverText: {
        textAlign: 'right',
        fontSize: 18,
        marginVertical: 18,
        color: secondaryColour
    },
    snackError: {
        backgroundColor: deleteButtonColour,
    },
    snackSuccess: {
        backgroundColor: successColour,
    }
});

export default RecoverPasswordForm;