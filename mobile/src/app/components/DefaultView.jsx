import React from 'react';
import { KeyboardAvoidingView, Platform, View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { backgroundColour } from '../styles/styles';
import DefaultSnackbar from './DefaultSnackbar';


const DefaultView = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={backgroundColour} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidContainer}
            >
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        {children}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            <DefaultSnackbar />
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
        paddingHorizontal: 10,
    },
    scrollContainer: {
        paddingVertical: 10
    }
});

export default DefaultView;