import React from 'react';
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import DefaultView from '../../components/DefaultView';
import RegisterForm from '../../components/RegisterForm';

const Register = () => {
    return (
        <DefaultView>
            <Title style={styles.title}>Register Account</Title>
            <RegisterForm />
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 15
    }
})


export default Register;