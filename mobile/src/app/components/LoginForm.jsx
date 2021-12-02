import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { secondaryColour } from '../styles/styles';
import DefaultButton from './DefaultButton';

const LoginForm = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <TextInput
                style={styles.input}
                label='E-mail'
                mode='outlined'
                value={email}
                textContentType={'emailAddress'}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                label='Password'
                mode='outlined'
                value={password}
                textContentType={'password'}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <Text style={styles.recoverText} onPress={() => navigation.navigate('RecoverPassword')}>Recover Password</Text>
            <DefaultButton buttonLabel='Login' onPress={() => navigation.reset({ routes: [{ name: 'HomeNav' }] })} />
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        marginTop: 15
    },
    recoverText: {
        textAlign: 'right',
        fontSize: 18,
        marginVertical: 18,
        color: secondaryColour
    }
});

export default LoginForm;