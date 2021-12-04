import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../../auth/AuthContext';
import useValidate from '../../core/hooks/useValidate';
import { useSnackbar } from '../../core/hooks/useSnackbar';
import { StyleSheet, Text } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import DefaultButton from './DefaultButton';
import { secondaryColour } from '../styles/styles';


const LoginForm = () => {
    const { setCurrentUser } = useAuth();
    const { errors, handleValidation } = useValidate();
    const { showSnack } = useSnackbar();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitLogin() {
        handleValidation(email, password);
        if (!errors.password.error && !errors.email.error) {
            setCurrentUser(email, password)
                .then((status) => {
                    if (status !== undefined) {
                        throw Error('Invalid email or password')
                    }
                }).catch((err) => showSnack(true, err.message))
        }
    };

    return (
        <>
            <TextInput
                style={styles.input}
                label='E-mail'
                mode='outlined'
                value={email}
                textContentType={'emailAddress'}
                onBlur={() => { handleValidation({ email }) }}
                error={errors.email.error}
                onChangeText={email => setEmail(email)}
            />
            <HelperText type='error' padding='none' visible={errors.email.error}>{errors.email.errorText}</HelperText>
            <TextInput
                style={styles.input}
                label='Password'
                mode='outlined'
                value={password}
                onBlur={() => { handleValidation({ password }) }}
                error={errors.password.error}
                textContentType={'password'}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                autoCapitalize='none'
            />
            <HelperText type='error' padding='none' visible={errors.password.error}>{errors.password.errorText}</HelperText>
            <Text style={styles.recoverText} onPress={() => navigation.navigate('RecoverPassword')}>Recover Password</Text>
            <DefaultButton buttonLabel='Login' onPress={() => submitLogin()} />
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        marginTop: 5
    },
    recoverText: {
        textAlign: 'right',
        fontSize: 18,
        marginTop: 3,
        marginBottom: 18,
        color: secondaryColour
    }
});

export default LoginForm;