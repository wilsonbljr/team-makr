import React from 'react';
import { KeyboardAvoidingView, Platform, View, StatusBar, StyleSheet } from 'react-native';
import { backgroundColour } from '../styles/styles';

const DefaultView = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={backgroundColour} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidContainer}
            >
                {children}
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColour,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyboardAvoidContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
    }
});

export default DefaultView;