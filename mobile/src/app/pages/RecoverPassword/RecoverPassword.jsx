import React from 'react';
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import DefaultView from '../../components/DefaultView';
import RecoverPasswordForm from '../../components/RecoverPasswordForm';

const RecoverPassword = () => {
    return (
        <DefaultView>
            <Title style={styles.title}>Recover your password</Title>
            <RecoverPasswordForm />
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 15
    }
})


export default RecoverPassword;