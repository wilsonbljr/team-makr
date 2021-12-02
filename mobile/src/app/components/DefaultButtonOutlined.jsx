import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { secondaryColour } from '../styles/styles';


const DefaultButtonOutlined = (props) => {
    return (
        <Button
            mode='outlined'
            style={styles.button}
            labelStyle={styles.buttonText}
            contentStyle={styles.content}
            {...props}
        >{props.buttonLabel}</Button>

    )
};

const styles = StyleSheet.create({
    button: {
        marginTop: 14,
        borderColor: secondaryColour,
        borderWidth: 1,
    },
    buttonText: {
        color: secondaryColour,
        fontSize: 16
    },
    content: {
        flexDirection: 'row-reverse',
    }
});

export default DefaultButtonOutlined;