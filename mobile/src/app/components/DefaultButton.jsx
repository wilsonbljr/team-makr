import React from 'react'
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { textColour } from '../styles/styles';


const DefaultButton = (props) => {
    return (
        <Button
            mode='contained'
            style={styles.button}
            labelStyle={styles.buttonText}
            {...props}
        >{props.buttonLabel}</Button>

    )
};

const styles = StyleSheet.create({
    button: {
        height: 40,
        marginVertical: 10,
        justifyContent: 'center'
    },
    buttonText: {
        color: textColour,
        fontSize: 16
    }
});

export default DefaultButton;