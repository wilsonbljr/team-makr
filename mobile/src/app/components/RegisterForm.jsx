import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { secondaryColour } from '../styles/styles';
import DefaultButton from './DefaultButton';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <TextInput
                style={styles.input}
                label='Name*'
                mode='outlined'
                value={name}
                textContentType={'name'}
                onChangeText={name => setName(name)}
            />
            <TextInput
                style={styles.input}
                label='Pronouns'
                mode='outlined'
                value={pronouns}
                onChangeText={pronouns => setPronouns(pronouns)}
            />
            <TextInput
                style={styles.input}
                label='Phone Number'
                mode='outlined'
                value={phone}
                textContentType={'telephoneNumber'}
                onChangeText={phone => setPhone(phone)}
            />
            <TextInput
                style={styles.input}
                label='E-mail*'
                mode='outlined'
                value={email}
                textContentType={'emailAddress'}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                label='Password*'
                mode='outlined'
                value={password}
                textContentType={'password'}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <DefaultButton buttonLabel='Register' />
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

export default RegisterForm;