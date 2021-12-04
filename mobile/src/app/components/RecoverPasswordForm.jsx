import React, { useState } from 'react';
import { forgotPasswordEmail, resetPassword } from '../../core/services/password.service';
import useValidate from '../../core/hooks/useValidate';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import DefaultButton from './DefaultButton';
import { secondaryColour } from '../styles/styles';


const RecoverPasswordForm = () => {
    const { errors, handleValidation } = useValidate();
    const navigation = useNavigation();
    const { showSnack } = useSnackbar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToken, setPasswordToken] = useState('');

    function submitRecoveryEmail() {
        handleValidation(email);
        if (!errors.email.error) {
            forgotPasswordEmail(email).then(res => {
                if (res.status === 200) {
                    showSnack(false, 'E-mail sent');
                } else {
                    showSnack(true, 'E-mail not found');
                }
            }).catch(error => {
                showSnack(true, 'Internal server error');
            });
        }
    };

    function submitResetPassword() {
        handleValidation(password);
        if (!errors.password.error) {
            resetPassword(email, password, passwordToken).then(res => {
                if (res === 200) {
                    showSnack(false, 'Password changed!');
                    setTimeout(() => navigation.navigate('Login'), 3000)
                } else {
                    showSnack(true, 'Invalid token');
                }
            }).catch(error => {
                showSnack(true, 'Internal server error')
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
    }
});

export default RecoverPasswordForm;