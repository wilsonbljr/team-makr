import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { secondaryColour } from '../styles/styles';
import DefaultButton from './DefaultButton';

const RecoverPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordToken, setPasswordToken] = useState('');

    return (
        <>
            <TextInput
                style={styles.input}
                label='E-mail*'
                mode='outlined'
                value={email}
                textContentType={'emailAddress'}
                onChangeText={email => setEmail(email)}
            />
            <DefaultButton buttonLabel='Send Token' />
            <TextInput
                style={styles.input}
                label='Token*'
                mode='outlined'
                value={passwordToken}
                onChangeText={passwordToken => setPasswordToken(passwordToken)}
            />
            <TextInput
                style={styles.input}
                label='New Password*'
                mode='outlined'
                value={password}
                textContentType={'password'}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <DefaultButton buttonLabel='Change Password' />
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 8
    },
    recoverText: {
        textAlign: 'right',
        fontSize: 18,
        marginVertical: 18,
        color: secondaryColour
    }
});

export default RecoverPasswordForm;