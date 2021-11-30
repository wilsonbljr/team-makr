import React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Subheading } from 'react-native-paper';
import DefaultButton from '../../components/DefaultButton';
import DefaultView from '../../components/DefaultView';
import LoginForm from '../../components/LoginForm';

const Login = ({ navigation }) => {

    return (
        <DefaultView>
            <ScrollView>
                <Image source={require('../../../assets/getStarted.png')} style={styles.image} />
                <Subheading style={styles.text}>Building your project is way easier with the right people</Subheading>
                <LoginForm navigation={navigation} />
                <DefaultButton buttonLabel='Register' onPress={() => navigation.navigate('Register')} />
            </ScrollView>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 15,
    }
});

export default Login;