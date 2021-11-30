import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import DefaultView from '../../components/DefaultView';
import RegisterForm from '../../components/RegisterForm';

const Register = () => {
    return (
        <DefaultView>
            <ScrollView>
                <Title style={styles.title}>Register Account</Title>
                <RegisterForm />
            </ScrollView>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 15
    }
})


export default Register;