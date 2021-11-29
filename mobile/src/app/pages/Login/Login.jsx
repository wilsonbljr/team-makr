import React, { useState } from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Subheading, TextInput } from 'react-native-paper';
import DefaultButton from '../../components/DefaultButton';
import DefaultView from '../../components/DefaultView';
import { secondaryColour } from '../../styles/styles';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <DefaultView>
            <ScrollView contentContainerStyle={styles.container} centerContent={true}>
                <Image source={require('../../../assets/getStarted.png')} style={styles.image} />
                <Subheading style={styles.text}>Building your project is way easier with the right people</Subheading>
                <TextInput
                    style={styles.input}
                    label='E-mail'
                    type='outlined'
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    style={styles.input}
                    label='Password'
                    type='outlined'
                    value={password}
                    onChangeText={password => setPassword(password)}
                />
                <Text style={styles.recoverText}>Recover Password</Text>
                <DefaultButton buttonLabel='Login' />
                <DefaultButton buttonLabel='Register' />
            </ScrollView>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 15,
    },
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

export default Login;