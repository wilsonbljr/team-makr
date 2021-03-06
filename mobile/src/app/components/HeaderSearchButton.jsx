import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';
import DefaultButtonOutlined from './DefaultButtonOutlined';
import { secondaryColour } from '../styles/styles';


const HeaderSearchButton = () => {
    const navigation = useNavigation();

    return (
        <DefaultButtonOutlined
            buttonLabel='Search'
            icon='magnify'
            contentStyle={styles.content}
            style={styles.button}
            labelStyle={styles.buttonText}
            onPress={() => { navigation.navigate('Search') }}
        />
    )
};

const styles = StyleSheet.create({
    button: {
        borderColor: secondaryColour,
        borderWidth: 1,
        height: 36,
    },
    buttonText: {
        marginTop: 5,
        color: secondaryColour,
        fontSize: 16,
    },
    content: {
        flexDirection: 'row',
    }
});

export default HeaderSearchButton;