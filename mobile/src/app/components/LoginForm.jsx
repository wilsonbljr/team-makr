import React, { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import useValidate from '../../core/hooks/useValidate';
import { StyleSheet, Text } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import DefaultButton from './DefaultButton';
import { secondaryColour } from '../styles/styles';


const LoginForm = ({ navigation }) => {
    const { setCurrentUser } = useAuth();
    const { errors, handleValidation } = useValidate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitLogin() {
        if (!errors.password.error && !errors.email.error) {
            setCurrentUser(email, password)
                .then((status) => {
                    if (status !== undefined) {
                        throw Error('Invalid email or password')
                    }
                    navigation.reset({ routes: [{ name: 'HomeNav' }] })
                }).catch(err => console.log(err))
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