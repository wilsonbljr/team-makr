import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import DefaultButton from '../../components/DefaultButton';
import DefaultView from '../../components/DefaultView';
import RecoverPasswordForm from '../../components/RecoverPasswordForm';

const RecoverPassword = ({ navigation }) => {
    return (
        <DefaultView>
            <ScrollView>
                <Title style={styles.title}>Recover your password</Title>
                <RecoverPasswordForm />
            </ScrollView>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 15
    }
})


export default RecoverPassword;